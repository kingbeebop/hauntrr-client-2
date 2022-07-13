class CreateHauntings < ActiveRecord::Migration[6.1]
  def change
    create_table :hauntings do |t|
      t.references :ghost
      t.references :house
    end
  end
end
