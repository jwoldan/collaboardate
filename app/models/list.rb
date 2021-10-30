# frozen_string_literal: true

# Lists have cards and generally represent a set of related tasks
class List < ApplicationRecord
  include Orderable
  ORD_ASSOC_FIELD = :board_id

  validates :title, :ord, :board, presence: true

  belongs_to :board, inverse_of: :lists
  has_many :cards, inverse_of: :list, dependent: :destroy
  has_many :ordered_cards,
           -> { order(:ord) },
           class_name: 'Card',
           inverse_of: :list,
           dependent: :destroy
end

# == Schema Information
#
# Table name: lists
#
#  id         :integer          not null, primary key
#  ord        :integer          not null
#  title      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  board_id   :integer          not null
#
# Indexes
#
#  index_lists_on_board_id_and_ord  (board_id,ord)
#
