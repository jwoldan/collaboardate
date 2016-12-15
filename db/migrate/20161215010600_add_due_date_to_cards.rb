class AddDueDateToCards < ActiveRecord::Migration[5.0]
  def change
    add_column :cards, :due_date, :datetime
    add_column :cards, :due_date_complete, :boolean, null: false, default: false
  end
end
