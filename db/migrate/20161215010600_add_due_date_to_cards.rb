# frozen_string_literal: true

class AddDueDateToCards < ActiveRecord::Migration[5.0]
  def change
    change_table :cards, bulk: true do |t|
      t.datetime :due_date
      t.boolean :due_date_complete, null: false, default: false
    end
  end
end
