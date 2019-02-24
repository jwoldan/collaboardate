# frozen_string_literal: true

class RemoveUniqueOrderFromLists < ActiveRecord::Migration[5.0]
  def change
    remove_index :lists, %i[board_id order]
    remove_column :lists, :order, :integer # rubocop:disable Rails/BulkChangeTable
    add_column :lists, :ord, :integer, null: false # rubocop:disable Rails/NotNullColumn
    add_index :lists, %i[board_id ord]
  end
end
