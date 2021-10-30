# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_10_30_153816) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "board_shares", id: :serial, force: :cascade do |t|
    t.integer "board_id", null: false
    t.integer "sharer_id", null: false
    t.integer "sharee_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["board_id"], name: "index_board_shares_on_board_id"
    t.index ["sharee_id", "board_id"], name: "index_board_shares_on_sharee_id_and_board_id", unique: true
    t.index ["sharer_id"], name: "index_board_shares_on_sharer_id"
  end

  create_table "boards", id: :serial, force: :cascade do |t|
    t.string "title", null: false
    t.boolean "starred", default: false, null: false
    t.string "visibility", null: false
    t.string "background", null: false
    t.integer "creator_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["creator_id"], name: "index_boards_on_creator_id"
  end

  create_table "cards", id: :serial, force: :cascade do |t|
    t.string "title", null: false
    t.text "description"
    t.integer "ord", null: false
    t.integer "list_id", null: false
    t.integer "author_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.datetime "due_date"
    t.boolean "due_date_complete", default: false, null: false
    t.integer "comments_count", default: 0
    t.index ["author_id"], name: "index_cards_on_author_id"
    t.index ["list_id", "ord"], name: "index_cards_on_list_id_and_ord"
  end

  create_table "checklists", id: :serial, force: :cascade do |t|
    t.string "title", null: false
    t.integer "ord", null: false
    t.integer "card_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["card_id", "ord"], name: "index_checklists_on_card_id_and_ord"
  end

  create_table "comments", id: :serial, force: :cascade do |t|
    t.text "body", null: false
    t.integer "card_id", null: false
    t.integer "author_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["author_id"], name: "index_comments_on_author_id"
    t.index ["card_id"], name: "index_comments_on_card_id"
  end

  create_table "lists", id: :serial, force: :cascade do |t|
    t.string "title", null: false
    t.integer "board_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "ord", null: false
    t.index ["board_id", "ord"], name: "index_lists_on_board_id_and_ord"
  end

  create_table "users", id: :serial, force: :cascade do |t|
    t.string "username", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.string "full_name", null: false
    t.string "initials", null: false
    t.text "bio"
    t.string "avatar_file_name"
    t.string "avatar_content_type"
    t.integer "avatar_file_size"
    t.datetime "avatar_updated_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
