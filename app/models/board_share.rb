# frozen_string_literal: true

# == Schema Information
#
# Table name: board_shares
#
#  id         :integer          not null, primary key
#  board_id   :integer          not null
#  sharer_id  :integer          not null
#  sharee_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

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
