# frozen_string_literal: true

FactoryBot.define do
  factory :checklist do
    sequence(:title) { Faker::Book.title }
    card
  end
end

# == Schema Information
#
# Table name: checklists
#
#  id         :integer          not null, primary key
#  ord        :integer          not null
#  title      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  card_id    :integer          not null
#
# Indexes
#
#  index_checklists_on_card_id_and_ord  (card_id,ord)
#
