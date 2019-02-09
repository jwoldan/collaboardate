# frozen_string_literal: true

class FixBoardShareShareeIndex < ActiveRecord::Migration[5.0]
  def change
    remove_index :board_shares, :sharee_id
    add_index :board_shares, %i[sharee_id board_id], unique: true
  end
end
