class AddRoreignkeyStaff < ActiveRecord::Migration[5.0]
  def change
    # change_table :staffs do |t|
      # t.foreign_key :jobcategory_id, options: 'ON UPDATE CASCADE ON DELETE CASCADE'
      # t.foreign_key :division_id, options: 'ON UPDATE CASCADE ON DELETE CASCADE'
      add_reference :staffs, :jobcategory_id
      add_reference :staffs, :division_id
      add_foreign_key :staffs, :jobcategories, column: :jobcategory_id
      add_foreign_key :staffs, :divisions, column: :division_id
    # end
  end
end
