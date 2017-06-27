class AddColumnToStaffsMainskill < ActiveRecord::Migration[5.0]
  def change
     add_column :staffs, :mainskill_1, :integer
     add_column :staffs, :mainskill_2, :integer
     add_column :staffs, :mainskill_3, :integer
     add_column :staffs, :mainskill_4, :integer
     add_column :staffs, :mainskill_5, :integer
  end
end
