FactoryGirl.define do
  factory :board do
    sequence(:title) { Faker::Commerce.department }
    visibility Board::VISIBILITY_PRIVATE
    sequence(:background) { Board::BACKGROUND_BLUE }
    creator
  end
end
