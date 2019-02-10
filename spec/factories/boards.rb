# frozen_string_literal: true

FactoryBot.define do
  factory :board do
    sequence(:title) { Faker::Commerce.department }
    visibility { Board::VISIBILITY_PRIVATE }
    sequence(:background) { Board::BACKGROUND_BLUE }
    creator
  end
end

# == Schema Information
#
# Table name: boards
#
#  id         :integer          not null, primary key
#  background :string           not null
#  starred    :boolean          default(FALSE), not null
#  title      :string           not null
#  visibility :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  creator_id :integer          not null
#
# Indexes
#
#  index_boards_on_creator_id  (creator_id)
#
