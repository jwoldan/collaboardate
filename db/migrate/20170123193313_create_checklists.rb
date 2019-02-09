# frozen_string_literal: true

class CreateChecklists < ActiveRecord::Migration[5.0]
  def change
    create_table :checklists do |t|
      t.string :title, null: false
      t.integer :ord, null: false
      t.integer :card_id, null: false

      t.timestamps
    end
    add_index :checklists, %i[card_id ord]
  end
end
