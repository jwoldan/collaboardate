# == Schema Information
#
# Table name: comments
#
#  id         :integer          not null, primary key
#  body       :text             not null
#  card_id    :integer          not null
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Comment < ApplicationRecord
  validates :body, :card, :author, presence: true

  belongs_to :card

  belongs_to :author,
    class_name: 'User'

  has_one :list,
    through: :card

  has_one :board,
    through: :list


end
