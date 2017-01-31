# == Schema Information
#
# Table name: cards
#
#  id                :integer          not null, primary key
#  title             :string           not null
#  description       :text
#  ord               :integer          not null
#  list_id           :integer          not null
#  author_id         :integer          not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#  due_date          :datetime
#  due_date_complete :boolean          default(FALSE), not null
#  comments_count    :integer          default(0)
#

class Card < ApplicationRecord
  include Orderable
  ORD_ASSOC_ID = :list_id

  validates :title, :ord, :list, :author, presence: true
  validates :due_date_complete, inclusion: [true, false]

  belongs_to :list

  belongs_to :author,
    class_name: 'User'

  has_one :board,
    through: :list

  has_many :comments, dependent: :destroy

  after_validation :handle_list_change

  private

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

end
