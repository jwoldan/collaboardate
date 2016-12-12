# == Schema Information
#
# Table name: cards
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  description :text
#  ord         :integer          not null
#  list_id     :integer          not null
#  author_id   :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Card < ApplicationRecord
  validates :title, :ord, :list, :author, presence: true

  belongs_to :list

  belongs_to :author,
    class_name: 'User'

  has_one :board,
    through: :list

  before_validation :ensure_ord
  after_validation :handle_list_change, :handle_ord_change

  def self.update_other_ords(list_id, old_ord, new_ord)
    unless old_ord == new_ord
      if old_ord > new_ord
        where_clause = "list_id = ? AND ord < ? AND ord >= ?"
        update_clause = "ord = ord + 1"
      elsif old_ord < new_ord
        where_clause = "list_id = ? AND ord > ? AND ord <= ?"
        update_clause = "ord = ord - 1"
      end

      Card.where(where_clause, list_id, old_ord, new_ord)
        .update_all(update_clause)
    end
  end

  def self.max_ord(list_id)
    Card.where(list_id: list_id).maximum(:ord)
  end

  def self.next_ord(list_id)
    max_ord = Card.max_ord(list_id)
    max_ord ? max_ord + 1 : 0
  end

  def max_ord
    Card.max_ord(self.list_id)
  end

  def next_ord
    Card.next_ord(self.list_id)
  end

  def destroy
    Card.update_other_ords(self.list_id, self.ord, self.max_ord)
    super
  end

  private

  def ensure_ord
    unless self.ord
      self.ord = next_ord
    end
  end

  # When a card's list changes, update ords in both the old and new list
  def handle_list_change
    old_list_id = self.changed_attributes["list_id"]

    if old_list_id
      # Update ords in old list
      if self.changed.include?("ord")
        old_ord = self.changed_attributes["ord"]
      else
        old_ord = self.ord
      end
      new_ord = Card.max_ord(old_list_id)
      Card.update_other_ords(old_list_id, old_ord, new_ord)

      # Update ords in new list
      new_list_id = self.list_id
      new_ord = self.ord
      old_ord = Card.next_ord(new_list_id)
      Card.update_other_ords(new_list_id, old_ord, new_ord)
    end
  end

  # Update related ords when a card's ord changes but it's list does not.
  def handle_ord_change
    unless self.changed_attributes["list_id"]
      # if ord has been set
      if self.changed.include?("ord")
        # if there was an old value, set it as old_ord
        if self.changed_attributes["ord"]
          old_ord = self.changed_attributes["ord"]
        # else consider the next available ord the old_ord
        else
          old_ord = Card.next_ord(self.list_id)
        end
        new_ord = self.ord
        Card.update_other_ords(self.list_id, old_ord, new_ord)
      end
    end
  end

end
