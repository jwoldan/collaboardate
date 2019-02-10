# frozen_string_literal: true

# Represents the "sharing" of a board with a user other than the creator of the board
class BoardShare < ApplicationRecord
  validates :board, :sharer, :sharee, presence: true
  validates :sharee, uniqueness: { scope: :board }
  validate :sharer_owns_board, :no_self_shares

  belongs_to :board
  belongs_to :sharer, class_name: 'User'
  belongs_to :sharee, class_name: 'User'

  def sharer?(user)
    sharer_id == user.id
  end

  private

  def sharer_owns_board
    return if Board.where(id: board_id, creator: sharer_id).exists?

    @errors.add(:sharer, 'is not the board creator')
  end

  def no_self_shares
    return unless sharer_id && sharee_id
    return unless sharer_id == sharee_id

    @errors.add(:sharee, 'can not be the sharer')
  end
end

# == Schema Information
#
# Table name: board_shares
#
#  id         :integer          not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  board_id   :integer          not null
#  sharee_id  :integer          not null
#  sharer_id  :integer          not null
#
# Indexes
#
#  index_board_shares_on_board_id                (board_id)
#  index_board_shares_on_sharee_id_and_board_id  (sharee_id,board_id) UNIQUE
#  index_board_shares_on_sharer_id               (sharer_id)
#
