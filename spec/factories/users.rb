FactoryGirl.define do
  factory :user, aliases: [:creator, :author] do
    initialize_with do
      new(full_name: Faker::Name.name_with_middle)
    end
    sequence(:email) { Faker::Internet.email }
    sequence(:password) { Faker::Internet.password }
  end
end
