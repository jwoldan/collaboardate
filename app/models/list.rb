# == Schema Information
#
# Table name: lists
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  order      :integer          not null
#  board_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class List < ApplicationRecord
  validates :title, :order, :board_id, presence: true
  validates :order, uniqueness: { scope: :board_id }

  belongs_to :board
  
end
