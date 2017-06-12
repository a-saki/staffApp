class AddStaffsToEvenskill < ActiveRecord::Migration[5.0]
  def change
    add_column :staffs, :even_skill, :string
  end
end
