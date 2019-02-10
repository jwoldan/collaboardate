# frozen_string_literal: true

# Boards contain lists, cards, and comments and often represent a project
class Board < ApplicationRecord
  VISIBILITY_PRIVATE = 'Private'
  VISIBILITY_PUBLIC = 'Public'
  BACKGROUND_BLUE = 'blue'
  BACKGROUND_ORANGE = 'orange'
  BACKGROUND_GREEN = 'green'
  BACKGROUND_RED = 'red'
  BACKGROUND_PURPLE = 'purple'
  BACKGROUND_PINK = 'pink'
  BACKGROUND_LIGHT_GREEN = 'light-green'
  BACKGROUND_LIGHT_BLUE = 'light-blue'
  BACKGROUND_GREY = 'grey'

  validates :title, :visibility, :background, :creator, presence: true
  validates :starred, inclusion: [true, false]
  validates :visibility, inclusion: [VISIBILITY_PRIVATE, VISIBILITY_PUBLIC]
  validates :background, inclusion: [
    BACKGROUND_BLUE,
    BACKGROUND_ORANGE,
    BACKGROUND_GREEN,
    BACKGROUND_RED,
    BACKGROUND_PURPLE,
    BACKGROUND_PINK,
    BACKGROUND_LIGHT_GREEN,
    BACKGROUND_LIGHT_BLUE,
    BACKGROUND_GREY
  ]

  belongs_to :creator, class_name: 'User'
  has_many :lists, dependent: :destroy
  has_many :cards, through: :lists
  has_many :shares, class_name: 'BoardShare'
  has_many :sharees, through: :shares

  def creator?(user)
    creator_id == user.id
  end

  def private?
    visibility == VISIBILITY_PRIVATE
  end

  def public?
    visibility == VISIBILITY_PUBLIC
  end

  def shared_with?(user)
    shares.where(sharee: user)
          .exists?
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
