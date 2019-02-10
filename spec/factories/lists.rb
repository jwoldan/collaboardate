# frozen_string_literal: true

FactoryBot.define do
  factory :list do
    sequence(:title) { Faker::Food.ingredient }
    board
  end
end

# == Schema Information
#
# Table name: lists
#
#  id         :integer          not null, primary key
#  ord        :integer          not null
#  title      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  board_id   :integer          not null
#
# Indexes
#
#  index_lists_on_board_id_and_ord  (board_id,ord)
#
