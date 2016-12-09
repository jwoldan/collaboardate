# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
guest = User.create!(
  full_name: "Guest",
  email: "guest@collaboardate.com",
  password: "collaboardate"
)

Board.destroy_all
full_stack_project = Board.create!(
  title: "Full Stack Project",
  visibility: "Private",
  background: "blue",
  creator_id: guest.id
)

vacation_planning = Board.create!(
  title: "Vacation Planning",
  visibility: "Public",
  background: "blue",
  creator_id: guest.id
)

surprise_party_planning = Board.create!(
  title: "Surprise Party Planning",
  visibility: "Private",
  background: "blue",
  creator_id: guest.id
)
