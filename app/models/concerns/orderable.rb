# frozen_string_literal: true

module Orderable
  extend ActiveSupport::Concern

  included do
    before_validation :ensure_ord
    after_validation :handle_ord_change
  end

  class_methods do
    def update_other_ords(assoc_id, old_ord, new_ord)
      return if old_ord == new_ord

      if old_ord > new_ord
        where_clause = "#{self::ORD_ASSOC_FIELD} = ? AND ord < ? AND ord >= ?"
        update_clause = 'ord = ord + 1'
      elsif old_ord < new_ord
        where_clause = "#{self::ORD_ASSOC_FIELD} = ? AND ord > ? AND ord <= ?"
        update_clause = 'ord = ord - 1'
      end

      where(where_clause, assoc_id, old_ord, new_ord)
        .update_all(update_clause)
    end

    def max_ord(assoc_id)
      where(self::ORD_ASSOC_FIELD => assoc_id).maximum(:ord)
    end

    def next_ord(assoc_id)
      max_ord = self.max_ord(assoc_id)
      max_ord ? max_ord + 1 : 0
    end
  end

  def max_ord
    self.class.max_ord(send(self.class::ORD_ASSOC_FIELD))
  end

  def next_ord
    self.class.next_ord(send(self.class::ORD_ASSOC_FIELD))
  end

  def destroy
    self.class.update_other_ords(
      send(self.class::ORD_ASSOC_FIELD), ord, max_ord
    )
    super
  end

  protected

  def ensure_ord
    self.ord = next_ord unless ord
  end

  def handle_ord_change
    return unless ord_changed?

    # if there was an old value, set is as old_ord, else consider the next available ord the old_ord
    old_ord = changed_attributes['ord'] || self.class.next_ord(send(self.class::ORD_ASSOC_FIELD))
    return unless old_ord

    new_ord = ord
    self.class.update_other_ords(
      send(self.class::ORD_ASSOC_FIELD),
      old_ord,
      new_ord
    )
  end
end
