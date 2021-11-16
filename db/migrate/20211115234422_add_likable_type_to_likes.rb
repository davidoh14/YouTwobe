class AddLikableTypeToLikes < ActiveRecord::Migration[5.2]
  def change
    add_column :likes, :likable, :references, null: false
  end
end
