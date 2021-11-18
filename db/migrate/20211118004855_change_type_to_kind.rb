class ChangeTypeToKind < ActiveRecord::Migration[5.2]
  def change
    rename_column :likes, :type, :kind
  end
end
