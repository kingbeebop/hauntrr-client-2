# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_07_12_154600) do

  create_table "ghosts", force: :cascade do |t|
    t.string "name"
    t.string "picUrl"
    t.integer "user_id"
  end

  create_table "hauntings", force: :cascade do |t|
    t.integer "ghost_id"
    t.integer "house_id"
    t.index ["ghost_id"], name: "index_hauntings_on_ghost_id"
    t.index ["house_id"], name: "index_hauntings_on_house_id"
  end

  create_table "houses", force: :cascade do |t|
    t.string "name"
    t.string "location"
    t.integer "distance"
    t.string "description"
    t.string "picUrl"
    t.integer "user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "password"
    t.boolean "is_ghost"
  end

end
