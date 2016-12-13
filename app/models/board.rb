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

  validates :title, :visibility, :background, :creator, presence: true
  validates :starred, inclusion: [true, false]
  validates :visibility, inclusion: [VISIBILITY_PRIVATE, VISIBILITY_PUBLIC]
  validates :background, inclusion: [BACKGROUND_BLUE]

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
