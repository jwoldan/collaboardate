FactoryGirl.define do
  factory :card do
    sequence(:title) { Faker::Music.instrument }
    sequence(:description) { Faker::Hipster.sentence }
    author
    list
  end
end
