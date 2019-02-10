# frozen_string_literal: true

# Comments represent discussion related to a particular card/task
class Comment < ApplicationRecord
  validates :body, :card, :author, presence: true

  belongs_to :card, counter_cache: true
  belongs_to :author, class_name: 'User'
  has_one :list, through: :card
  has_one :board, through: :list

  delegate :board_id,
           to: :list

  def author?(user)
    author_id == user.id
  end
end

# == Schema Information
#
# Table name: comments
#
#  id         :integer          not null, primary key
#  body       :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  author_id  :integer          not null
#  card_id    :integer          not null
#
# Indexes
#
#  index_comments_on_author_id  (author_id)
#  index_comments_on_card_id    (card_id)
#
