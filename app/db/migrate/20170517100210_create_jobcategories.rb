class CreateJobcategories < ActiveRecord::Migration[5.0]
  def change
    create_table :jobcategories do |t|
      t.text :jobcategory_name,index: true

      t.timestamps
    end
  end
end
