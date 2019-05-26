class ChangeLatToDecimal < ActiveRecord::Migration[5.2]
  def change
    change_column :threats, :lat, :decimal, { precision: 10, scale: 6 }
  end
end
