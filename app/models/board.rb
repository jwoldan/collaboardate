# == Schema Information
#
# Table name: boards
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  starred    :boolean          default(FALSE), not null
#  visibility :string           not null
#  background :string           not null
#  creator_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Board < ApplicationRecord

  VISIBILITY_PRIVATE = 'Private'.freeze
  VISIBILITY_PUBLIC = 'Public'.freeze
  BACKGROUND_BLUE = 'blue'.freeze
  BACKGROUND_ORANGE = 'orange'.freeze
  BACKGROUND_GREEN = 'green'.freeze
  BACKGROUND_RED = 'red'.freeze
  BACKGROUND_PURPLE = 'purple'.freeze
  BACKGROUND_PINK = 'pink'.freeze
  BACKGROUND_LIGHT_GREEN = 'light-green'.freeze
  BACKGROUND_LIGHT_BLUE = 'light-blue'.freeze
  BACKGROUND_GREY = 'grey'.freeze

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

  belongs_to :creator,
    class_name: 'User'

  has_many :lists, dependent: :destroy

  has_many :cards,
    through: :lists

  has_many :shares,
    class_name: 'BoardShare'

  has_many :sharees,
    through: :shares

end
