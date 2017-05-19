class AddJobcategoryReferences < ActiveRecord::Migration[5.0]
  def change
    add_column :staffs, :jobcategory_id, :integer, :default => 1
    add_index :staffs, :jobcategory_id # インデックスを貼る場合
  end
end
