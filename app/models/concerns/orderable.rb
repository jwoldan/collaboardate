module Orderable
  extend ActiveSupport::Concern

  included do
    before_validation :ensure_ord
    after_validation :handle_ord_change
  end

  class_methods do
    def update_other_ords(assoc_id, old_ord, new_ord)
      unless old_ord == new_ord
        if old_ord > new_ord
          where_clause = "#{self::ORD_ASSOC_FIELD} = ? AND ord < ? AND ord >= ?"
          update_clause = "ord = ord + 1"
        elsif old_ord < new_ord
          where_clause = "#{self::ORD_ASSOC_FIELD} = ? AND ord > ? AND ord <= ?"
          update_clause = "ord = ord - 1"
        end
        self.where(where_clause, assoc_id, old_ord, new_ord)
          .update_all(update_clause)
      end
    end

    def max_ord(assoc_id)
      self.where(self::ORD_ASSOC_FIELD => assoc_id).maximum(:ord)
    end

    def next_ord(assoc_id)
      max_ord = self.max_ord(assoc_id)
      max_ord ? max_ord + 1 : 0
    end
  end

  def max_ord
    self.class.max_ord(self.send(self.class::ORD_ASSOC_FIELD))
  end

  def next_ord
    self.class.next_ord(self.send(self.class::ORD_ASSOC_FIELD))
  end

  def destroy
    self.class.update_other_ords(
      self.send(self.class::ORD_ASSOC_FIELD), self.ord, self.max_ord
    )
    super
  end

  protected

  def ensure_ord
    unless self.ord
      self.ord = next_ord
    end
  end

  def handle_ord_change
    # if ord has been set
    if self.changed.include?("ord")
      # if there was an old value, set is as old_ord
      if self.changed_attributes["ord"]
        old_ord = self.changed_attributes["ord"]
        # else consider the next available ord the old_ord
      else
        old_ord = self.class.next_ord(self.send(self.class::ORD_ASSOC_FIELD))
      end
      if old_ord
        new_ord = self.ord
        self.class.update_other_ords(
          self.send(self.class::ORD_ASSOC_FIELD),
          old_ord,
          new_ord
        )
      end
    end
  end

end
