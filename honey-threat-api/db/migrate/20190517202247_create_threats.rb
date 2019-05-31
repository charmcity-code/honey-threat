class CreateThreats < ActiveRecord::Migration[5.2]
  def change
    create_table :threats do |t|
      t.string :ip
      t.integer :count
      t.string :lat
      t.string :long
      t.string :address

      t.timestamps
    end
  end
end
