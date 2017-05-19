class AddRoreignkeyStaff < ActiveRecord::Migration[5.0]
  def change
    change_table :staffs do |t|
      t.foreign_key :jobcategory_id, options: 'ON UPDATE CASCADE ON DELETE CASCADE'
      t.foreign_key :division_id, options: 'ON UPDATE CASCADE ON DELETE CASCADE'
    end
  end
end
