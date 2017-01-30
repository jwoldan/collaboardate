FactoryGirl.define do
  factory :list do
    sequence(:title) { Faker::Food.ingredient }
    board
  end
end
