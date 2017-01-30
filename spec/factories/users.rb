FactoryGirl.define do
  factory :user, aliases: [:creator, :author] do
    sequence(:full_name) { Faker::Name.name_with_middle }
    sequence(:initials) do
      full_name.split(' ').map { |name| name[0] }.join('')[0..2]
    end
    sequence(:username) { Faker::Internet.user_name(:full_name) }
    sequence(:email) { Faker::Internet.email }
    sequence(:password) { Faker::Internet.password }
  end
end
