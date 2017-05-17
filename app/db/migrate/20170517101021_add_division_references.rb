class AddDivisionReferences < ActiveRecord::Migration[5.0]
  def change
    add_column :staffs, :division, :integer, :default => 1
    add_index :staffs, :division
  end
end
