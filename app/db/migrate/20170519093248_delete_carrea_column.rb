class DeleteCarreaColumn < ActiveRecord::Migration[5.0]
  def change
    remove_column :staffs, :careea, :string
  end
end
