# frozen_string_literal: true

# Cards exist within a list and generally represent an individual task
class Card < ApplicationRecord
  include Orderable
  ORD_ASSOC_FIELD = :list_id

  validates :title, :ord, :list, :author, presence: true
  validates :due_date_complete, inclusion: [true, false]

  belongs_to :list, inverse_of: :cards
  belongs_to :author, class_name: 'User', inverse_of: :authored_cards
  has_one :board, through: :list, inverse_of: :cards
  has_many :comments, inverse_of: :card, dependent: :destroy

  after_validation :handle_list_change

  delegate :board_id,
           to: :list

  private

  # When a card's list changes, update ords in both the old and new list
  def handle_list_change
    old_list_id = changed_attributes['list_id']
    return unless old_list_id

    # Update ords in old list
    old_ord = ord_changed? ? changed_attributes['ord'] : ord
    new_ord = Card.max_ord(old_list_id)
    Card.update_other_ords(old_list_id, old_ord, new_ord)

    # Update ords in new list
    new_list_id = list_id
    new_ord = ord
    old_ord = Card.next_ord(new_list_id)
    Card.update_other_ords(new_list_id, old_ord, new_ord)
  end
end

# == Schema Information
#
# Table name: cards
#
#  id                :integer          not null, primary key
#  comments_count    :integer          default(0)
#  description       :text
#  due_date          :datetime
#  due_date_complete :boolean          default(FALSE), not null
#  ord               :integer          not null
#  title             :string           not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#  author_id         :integer          not null
#  list_id           :integer          not null
#
# Indexes
#
#  index_cards_on_author_id        (author_id)
#  index_cards_on_list_id_and_ord  (list_id,ord)
#
