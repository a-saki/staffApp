# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170627004549) do

  create_table "divisions", force: :cascade do |t|
    t.text     "division_name"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
    t.index ["division_name"], name: "index_divisions_on_division_name"
  end

  create_table "jobcategories", force: :cascade do |t|
    t.text     "jobcategory_name"
    t.datetime "created_at",       null: false
    t.datetime "updated_at",       null: false
    t.index ["jobcategory_name"], name: "index_jobcategories_on_jobcategory_name"
  end

  create_table "staffs", force: :cascade do |t|
    t.string   "name",                        null: false
    t.string   "email"
    t.string   "password_digest"
    t.string   "twitter"
    t.string   "facebook"
    t.string   "slack"
    t.datetime "created_at",                  null: false
    t.datetime "updated_at",                  null: false
    t.integer  "jobcategory_id",  default: 1
    t.integer  "division_id",     default: 1
    t.string   "remember_digest"
    t.string   "other_skill"
    t.string   "even_skill"
    t.integer  "mainskill_0"
    t.integer  "mainskill_1"
    t.integer  "mainskill_2"
    t.integer  "mainskill_3"
    t.integer  "mainskill_4"
    t.index ["division_id"], name: "index_staffs_on_division_id"
    t.index ["email"], name: "index_staffs_on_email", unique: true
    t.index ["jobcategory_id"], name: "index_staffs_on_jobcategory_id"
  end

end
