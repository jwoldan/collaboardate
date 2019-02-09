# frozen_string_literal: true

FactoryBot.define do
  factory :card do
    sequence(:title) { Faker::Music.instrument }
    sequence(:description) { Faker::Hipster.sentence }
    author
    list
  end
end
