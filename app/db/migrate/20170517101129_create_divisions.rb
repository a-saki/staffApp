class CreateDivisions < ActiveRecord::Migration[5.0]
  def change
    create_table :divisions do |t|
      t.text :division_name,index: true

      t.timestamps
    end
  end
end
