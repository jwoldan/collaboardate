# frozen_string_literal: true

class CreateLists < ActiveRecord::Migration[5.0]
  def change
    create_table :lists do |t|
      t.string :title, null: false
      t.integer :order, null: false
      t.integer :board_id, null: false

      t.timestamps
    end
    add_index :lists, %i[board_id order], unique: true
  end
end
