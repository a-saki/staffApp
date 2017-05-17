class AddJobcategoryReferences < ActiveRecord::Migration[5.0]
  def change
    add_column :staffs, :jobcategory, :integer, :default => 1
    add_index :staffs, :jobcategory # インデックスを貼る場合
  end
end
