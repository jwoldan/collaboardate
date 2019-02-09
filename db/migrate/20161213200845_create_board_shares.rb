# frozen_string_literal: true

class CreateBoardShares < ActiveRecord::Migration[5.0]
  def change
    create_table :board_shares do |t|
      t.integer :board_id, null: false
      t.integer :sharer_id, null: false
      t.integer :sharee_id, null: false

      t.timestamps
    end
    add_index :board_shares, :board_id
    add_index :board_shares, :sharer_id
    add_index :board_shares, :sharee_id, unique: true
  end
end
