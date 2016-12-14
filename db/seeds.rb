# This file should contain all the record creation needed to seed
# the database with its default values.
# The data can then be loaded with the rails db:seed command
# (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create(
#     [{ name: 'Star Wars' },
#     { name: 'Lord of the Rings' }]
#   )
#   Character.create(name: 'Luke', movie: movies.first)

require 'csv'

User.destroy_all

guest = User.create!(
  full_name: "Guest",
  email: "guest@collaboardate.com",
  password: "collaboardate"
)

friend = User.create!(
  full_name: "Friend",
  email: "friend@collaboardate.com",
  password: "collaboardate"
)

collaborator = User.create!(
  full_name: "Collaborator",
  email: "collaborator@collaboardate.com",
  password: "collaboardate"
)


Board.destroy_all

full_stack_project = Board.create!(
  title: "Full Stack Project",
  visibility: "Private",
  background: "blue",
  creator_id: guest.id
)

Board.create!(
  title: "Restaurant Operations",
  visibility: "Private",
  background: "blue",
  creator_id: guest.id
)

surprise_party_planning = Board.create!(
  title: "Surprise Party Planning",
  visibility: "Private",
  background: "blue",
  creator_id: guest.id
)

Board.create!(
  title: "Holiday Shopping",
  visibility: "Private",
  background: "blue",
  creator_id: guest.id
)

Board.create!(
  title: "Vacation Planning",
  visibility: "Public",
  background: "blue",
  creator_id: guest.id
)

bowling_league = Board.create!(
  title: "Bowling League",
  visibility: "Private",
  background: "blue",
  creator_id: friend.id
)


BoardShare.destroy_all

BoardShare.create!(
  board_id: full_stack_project.id,
  sharer_id: guest.id,
  sharee_id: collaborator.id
)

BoardShare.create!(
  board_id: surprise_party_planning.id,
  sharer_id: guest.id,
  sharee_id: friend.id
)

BoardShare.create!(
  board_id: bowling_league.id,
  sharer_id: friend.id,
  sharee_id: guest.id
)


List.destroy_all

CSV.foreach(
  "#{Rails.root}/db/csv/lists.csv",
  headers: true,
  header_converters: :symbol
) do |row|
  List.create!(
    title: row[:title],
    board: Board.find_by(title: row[:board_title])
  )
end


Card.destroy_all

CSV.foreach(
  "#{Rails.root}/db/csv/cards.csv",
  headers: true,
  header_converters: :symbol
) do |row|
  Card.create!(
    title: row[:title],
    description: row[:description],
    author: User.find_by(username: row[:username]),
    list: List.find_by(title: row[:list_title])
  )
end
