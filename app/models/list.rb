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

  has_many :cards, dependent: :destroy

  before_validation :ensure_ord
  after_validation :handle_ord_change

  def self.update_other_ords(board_id, old_ord, new_ord)
    unless old_ord == new_ord
      if old_ord > new_ord
        where_clause = "board_id = ? AND ord < ? AND ord >= ?"
        update_clause = "ord = ord + 1"
      elsif old_ord < new_ord
        where_clause = "board_id = ? AND ord > ? AND ord <= ?"
        update_clause = "ord = ord - 1"
      end

      List.where(where_clause, board_id, old_ord, new_ord)
        .update_all(update_clause)
    end
  end

  def self.max_ord(board_id)
    List.where(board_id: board_id).maximum(:ord)
  end

  def self.next_ord(board_id)
    max_ord = List.max_ord(board_id)
    max_ord ? max_ord + 1 : 0
  end

  def max_ord
    List.max_ord(self.board_id)
  end

  def next_ord
    List.next_ord(self.board_id)
  end

  def destroy
    List.update_other_ords(self.board_id, self.ord, self.max_ord)
    super
  end

  private

  def ensure_ord
    unless self.ord
      self.ord = next_ord
    end
  end

  def handle_ord_change
    if self.changed_attributes["ord"]
      old_ord = self.changed_attributes["ord"]
    else
      old_ord = List.next_ord(self.board_id)
    end
    if old_ord
      new_ord = self.ord
      List.update_other_ords(self.board_id, old_ord, new_ord)
    end
  end

end
