class ChangeLongToDecimal < ActiveRecord::Migration[5.2]
  def change
    change_column :threats, :long, :decimal, { precision: 10, scale: 6 }
  end
end
