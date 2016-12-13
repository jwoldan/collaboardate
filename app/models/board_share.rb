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

class BoardShare < ApplicationRecord
  validates :board, :sharer, :sharee, presence: true
  validates :sharee, uniqueness: { scope: :board }
  validate :sharer_owns_board, :no_self_shares

  belongs_to :board

  belongs_to :sharer,
    class_name: 'User'

  belongs_to :sharee,
    class_name: 'User'

  private

  def sharer_owns_board
    board = Board.find(self.board_id)
    if board
      if board.creator_id != self.sharer_id
        @errors.add(:sharer, "is not the board creator")
      end
    end
  end

  def no_self_shares
    if self.sharer_id && self.sharee_id
      if self.sharer_id == self.sharee_id
        @errors.add(:sharee, "can not be the sharer")
      end
    end
  end

end