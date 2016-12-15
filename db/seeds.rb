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

reviewer = User.create!(
  full_name: "Reviewer",
  email: "reviewer@collaboardate.com",
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

head_chef = User.create!(
  full_name: "Head Chef",
  email: "headchef@collaboardate.com",
  password: "collaboardate"
)


Board.destroy_all

full_stack_project = Board.create!(
  title: "Full Stack Project",
  visibility: Board::VISIBILITY_PRIVATE,
  background: Board::BACKGROUND_BLUE,
  creator_id: guest.id
)

restaurant_operations = Board.create!(
  title: "Restaurant Operations",
  visibility: Board::VISIBILITY_PRIVATE,
  background: Board::BACKGROUND_BLUE,
  creator_id: guest.id
)

surprise_party_planning = Board.create!(
  title: "Surprise Party Planning",
  visibility: Board::VISIBILITY_PRIVATE,
  background: Board::BACKGROUND_BLUE,
  creator_id: guest.id
)

Board.create!(
  title: "Holiday Shopping",
  visibility: Board::VISIBILITY_PRIVATE,
  background: Board::BACKGROUND_BLUE,
  creator_id: guest.id
)

Board.create!(
  title: "Vacation Planning",
  visibility: Board::VISIBILITY_PUBLIC,
  background: Board::BACKGROUND_BLUE,
  creator_id: guest.id
)

bowling_league = Board.create!(
  title: "Bowling League",
  visibility: Board::VISIBILITY_PRIVATE,
  background: Board::BACKGROUND_BLUE,
  creator_id: friend.id
)


BoardShare.destroy_all

BoardShare.create!(
  board_id: full_stack_project.id,
  sharer_id: guest.id,
  sharee_id: collaborator.id
)

BoardShare.create!(
  board_id: full_stack_project.id,
  sharer_id: guest.id,
  sharee_id: reviewer.id
)

BoardShare.create!(
  board_id: restaurant_operations.id,
  sharer_id: guest.id,
  sharee_id: head_chef.id
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
  card = Card.create!(
    title: row[:title],
    description: row[:description],
    author: User.find_by(username: row[:username]),
    list: List.find_by(title: row[:list_title])
  )
  if row[:due_date]
    due_date = Time.now + row[:due_date].to_i.days
    card.due_date = Time.at(rand(due_date.to_i...(due_date + 1.days).to_i))
  end
  if row[:due_date_complete] == 'TRUE'
    card.due_date_complete = true
  end
  card.save
end


Comment.destroy_all

CSV.foreach(
"#{Rails.root}/db/csv/comments.csv",
headers: true,
header_converters: :symbol
) do |row|
  # puts "'#{row[:body]}' '#{row[:username]}' '#{row[:card_title]}'"
  Comment.create!(
    body: row[:body],
    author: User.find_by(username: row[:username]),
    card: Card.find_by(title: row[:card_title])
  )
  sleep(2)
end
