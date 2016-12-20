class AddCommentsCountToCards < ActiveRecord::Migration[5.0]
  def change
    add_column :cards, :comments_count, :integer, default: 0
  end
end
