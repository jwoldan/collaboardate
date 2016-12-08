class CreateBoards < ActiveRecord::Migration[5.0]
  def change
    create_table :boards do |t|
      t.string :title, null: false
      t.boolean :starred, null: false, default: false
      t.string :visibility, null: false
      t.string :background, null: false
      t.integer :creator_id, null: false

      t.timestamps
    end
    add_index :boards, :creator_id
  end
end
