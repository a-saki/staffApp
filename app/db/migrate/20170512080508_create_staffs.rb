class CreateStaffs < ActiveRecord::Migration[5.0]
  def change
    create_table :staffs do |t|
      t.string :name, :null => false
      t.string :email
      t.string :password_digest
      t.string :careea
      t.string :jobcategory, :null => false
      t.string :division, :null => false
      t.string :twitter
      t.string :facebook
      t.string :insta

      t.timestamps
      t.index :email, unique: true
    end
  end
end
