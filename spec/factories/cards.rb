# frozen_string_literal: true

FactoryBot.define do
  factory :card do
    sequence(:title) { Faker::Music.instrument }
    sequence(:description) { Faker::Hipster.sentence }
    author
    list
  end
end

# == Schema Information
#
# Table name: cards
#
#  id                :integer          not null, primary key
#  comments_count    :integer          default(0)
#  description       :text
#  due_date          :datetime
#  due_date_complete :boolean          default(FALSE), not null
#  ord               :integer          not null
#  title             :string           not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#  author_id         :integer          not null
#  list_id           :integer          not null
#
# Indexes
#
#  index_cards_on_author_id        (author_id)
#  index_cards_on_list_id_and_ord  (list_id,ord)
#
