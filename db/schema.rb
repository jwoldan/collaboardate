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

ActiveRecord::Schema.define(version: 20161220022815) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "board_shares", force: :cascade do |t|
    t.integer  "board_id",   null: false
    t.integer  "sharer_id",  null: false
    t.integer  "sharee_id",  null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["board_id"], name: "index_board_shares_on_board_id", using: :btree
    t.index ["sharee_id", "board_id"], name: "index_board_shares_on_sharee_id_and_board_id", unique: true, using: :btree
    t.index ["sharer_id"], name: "index_board_shares_on_sharer_id", using: :btree
  end

  create_table "boards", force: :cascade do |t|
    t.string   "title",                      null: false
    t.boolean  "starred",    default: false, null: false
    t.string   "visibility",                 null: false
    t.string   "background",                 null: false
    t.integer  "creator_id",                 null: false
    t.datetime "created_at",                 null: false
    t.datetime "updated_at",                 null: false
    t.index ["creator_id"], name: "index_boards_on_creator_id", using: :btree
  end

  create_table "cards", force: :cascade do |t|
    t.string   "title",                             null: false
    t.text     "description"
    t.integer  "ord",                               null: false
    t.integer  "list_id",                           null: false
    t.integer  "author_id",                         null: false
    t.datetime "created_at",                        null: false
    t.datetime "updated_at",                        null: false
    t.datetime "due_date"
    t.boolean  "due_date_complete", default: false, null: false
    t.integer  "comments_count"
    t.index ["author_id"], name: "index_cards_on_author_id", using: :btree
    t.index ["list_id", "ord"], name: "index_cards_on_list_id_and_ord", using: :btree
  end

  create_table "comments", force: :cascade do |t|
    t.text     "body",       null: false
    t.integer  "card_id",    null: false
    t.integer  "author_id",  null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["author_id"], name: "index_comments_on_author_id", using: :btree
    t.index ["card_id"], name: "index_comments_on_card_id", using: :btree
  end

  create_table "lists", force: :cascade do |t|
    t.string   "title",      null: false
    t.integer  "board_id",   null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer  "ord",        null: false
    t.index ["board_id", "ord"], name: "index_lists_on_board_id_and_ord", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",            null: false
    t.string   "email",               null: false
    t.string   "password_digest",     null: false
    t.string   "session_token",       null: false
    t.string   "full_name",           null: false
    t.string   "initials",            null: false
    t.text     "bio"
    t.string   "avatar_file_name"
    t.string   "avatar_content_type"
    t.integer  "avatar_file_size"
    t.datetime "avatar_updated_at"
    t.datetime "created_at",          null: false
    t.datetime "updated_at",          null: false
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
    t.index ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
    t.index ["username"], name: "index_users_on_username", unique: true, using: :btree
  end

end
