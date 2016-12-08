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
  validates :title, :visibility, :background, :creator, presence: true
  validates :starred, inclusion: [true, false]
  validates :visibility, inclusion: ['private', 'public']
  validates :background, inclusion: ['blue']

  belongs_to :creator,
    class_name: 'User',
    primary_key: :id,
    foreign_key: :creator_id

end
