# == Schema Information
#
# Table name: lists
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  board_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  ord        :integer          not null
#

class List < ApplicationRecord
  validates :title, :ord, :board, presence: true

  belongs_to :board

  before_validation :ensure_ord

  def ord=(new_ord)
    new_ord = new_ord.to_i
    # Get current ord, or if not set, get the next available ord
    old_ord = self.ord ? self.ord : next_ord

    # if the ord is changing or a new list is not using
    # the default next available ord, reorder other lists
    unless old_ord == new_ord
      if old_ord > new_ord
        where_clause = "board_id = ? AND ord < ? AND ord >= ?"
        update_clause = "ord = ord + 1"
      elsif old_ord < new_ord
        where_clause = "board_id = ? AND ord > ? AND ord <= ?"
        update_clause = "ord = ord - 1"
      end

      List.where(where_clause, self.board_id, old_ord, new_ord)
        .update_all(update_clause)
    end

    self[:ord] = new_ord
  end

  def max_ord
    List.where(board_id: self.board_id).maximum(:ord)
  end

  def next_ord
    max_ord = self.max_ord
    max_ord ? max_ord + 1 : 0
  end

  def destroy
    self.ord = max_ord
    super
  end

  private

  def ensure_ord
    unless self.ord
      self.ord = next_ord
    end
  end

end
