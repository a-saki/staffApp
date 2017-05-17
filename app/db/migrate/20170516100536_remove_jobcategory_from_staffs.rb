class RemoveJobcategoryFromStaffs < ActiveRecord::Migration[5.0]
  def change
    remove_column :staffs, :jobcategory
  end
end
