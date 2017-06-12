class StaffsColumnAddOtherSkills < ActiveRecord::Migration[5.0]
  def change
    add_column :staffs, :other_skill, :string
  end
end
