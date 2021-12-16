class ChangeCreatedAtType < ActiveRecord::Migration[5.2]
  def change
    change_table :comments do |t|
      t.change :created_at, :date
      t.change :updated_at, :date
    end
  end

  def change
    change_table :videos do |t|
      t.change :created_at, :date
      t.change :updated_at, :date
    end
  end
end
