class CreateHouses < ActiveRecord::Migration[6.1]
  def change
    create_table :houses do |t|
      t.string :name
      t.string :location
      t.integer :distance
      t.string :description
      t.string :picUrl
      t.integer :user_id
    end
  end
end
