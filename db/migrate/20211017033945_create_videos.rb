class CreateVideos < ActiveRecord::Migration[5.2]
  def change
    create_table :videos do |t|
      t.string :title, null: false
      t.string :description
      t.integer :uploader_id, null: false
      t.integer :view_count

      t.timestamps
    end

    add_index :videos, :uploader_id
  end
end
