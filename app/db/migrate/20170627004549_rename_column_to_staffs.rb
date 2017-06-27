class RenameColumnToStaffs < ActiveRecord::Migration[5.0]
  def change
    rename_column :staffs, :mainskill_1, :mainskill_0
    rename_column :staffs, :mainskill_2, :mainskill_1
    rename_column :staffs, :mainskill_3, :mainskill_2
    rename_column :staffs, :mainskill_4, :mainskill_3
    rename_column :staffs, :mainskill_5, :mainskill_4
  end
end
