class CreateGhosts < ActiveRecord::Migration[6.1]
  def change
    create_table :ghosts do |t|
      t.string :name
      t.string :picUrl
      t.integer :user_id
    end
  end
end
