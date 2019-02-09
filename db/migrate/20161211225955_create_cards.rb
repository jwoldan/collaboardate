# frozen_string_literal: true

class CreateCards < ActiveRecord::Migration[5.0]
  def change
    create_table :cards do |t|
      t.string :title, null: false
      t.text :description
      t.integer :ord, null: false
      t.integer :list_id, null: false
      t.integer :author_id, null: false

      t.timestamps
    end
    add_index :cards, %i[list_id ord]
    add_index :cards, :author_id
  end
end
