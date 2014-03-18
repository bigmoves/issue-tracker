# encoding: UTF-8
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

ActiveRecord::Schema.define(version: 20140318070418) do

  create_table "comments", force: true do |t|
    t.string   "body"
    t.integer  "user_id"
    t.integer  "issue_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "comments", ["issue_id"], name: "index_comments_on_issue_id"
  add_index "comments", ["user_id"], name: "index_comments_on_user_id"

  create_table "issues", force: true do |t|
    t.string   "title"
    t.string   "body"
    t.string   "state"
    t.integer  "user_id"
    t.integer  "assignee_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "issues", ["assignee_id"], name: "index_issues_on_assignee_id"
  add_index "issues", ["user_id"], name: "index_issues_on_user_id"

  create_table "labels", force: true do |t|
    t.string   "name"
    t.string   "color"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "labelships", force: true do |t|
    t.integer  "issue_id"
    t.integer  "label_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "users", force: true do |t|
    t.string   "name"
    t.string   "email"
    t.string   "username"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
