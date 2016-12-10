class RemoveUniqueOrderFromLists < ActiveRecord::Migration[5.0]
  def change
    remove_index :lists, [:board_id, :order]
    add_index :lists, [:board_id, :order]
  end
end
