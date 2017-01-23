# == Schema Information
#
# Table name: checklists
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  ord        :integer          not null
#  card_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Checklist < ApplicationRecord
  validates :title, :ord, presence: true

  belongs_to :card

  has_one :list,
    through: :card

  has_one :board,
    through: :list

  before_validation :ensure_ord
  after_validation :handle_ord_change

  def self.update_other_ords(card_id, old_ord, new_ord)
    unless old_ord == new_ord
      if old_ord > new_ord
        where_clause = "card_id = ? AND ord < ? AND ord >= ?"
        update_clause = "ord = ord + 1"
      elsif old_ord < new_ord
        where_clause = "card_id = ? AND ord > ? AND ord <= ?"
        update_clause = "ord = ord - 1"
      end

      Checklist.where(where_clause, card_id, old_ord, new_ord)
        .update_all(update_clause)
    end
  end

  def self.max_ord(card_id)
    Checklist.where(card_id: card_id).maximum(:ord)
  end

  def self.next_ord(card_id)
    max_ord = Checklist.max_ord(card_id)
    max_ord ? max_ord + 1 : 0
  end

  def max_ord
    Checklist.max_ord(self.card_id)
  end

  def next_ord
    Checklist.next_ord(self.card_id)
  end

  def destroy
    Checklist.update_other_ords(self.card_id, self.ord, self.max_ord)
    super
  end

  private

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
        old_ord = Checklist.next_ord(self.card_id)
      end
      if old_ord
        new_ord = self.ord
        Checklist.update_other_ords(self.card_id, old_ord, new_ord)
      end
    end
  end

end
