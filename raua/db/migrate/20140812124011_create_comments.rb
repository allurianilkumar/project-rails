class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.string :author
      t.text :text
      t.timestamps
    end
  end
  def down
    drop_table :comments
  end
end
