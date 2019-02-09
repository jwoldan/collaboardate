# frozen_string_literal: true

FactoryBot.define do
  factory :list do
    sequence(:title) { Faker::Food.ingredient }
    board
  end
end
