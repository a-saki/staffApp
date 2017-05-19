class ChangeInastaToSlack < ActiveRecord::Migration[5.0]
  def change
    rename_column :staffs, :insta, :slack
  end
end
