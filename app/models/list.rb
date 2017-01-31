# == Schema Information
#
# Table name: lists
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  board_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  ord        :integer          not null
#

class List < ApplicationRecord
  include Orderable
  ORD_ASSOC_FIELD = :board_id

  validates :title, :ord, :board, presence: true

  belongs_to :board

  has_many :cards, dependent: :destroy

end
