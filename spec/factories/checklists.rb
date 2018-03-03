FactoryBot.define do
  factory :checklist do
    sequence(:title) { Faker::Book.title }
    card
  end
end
