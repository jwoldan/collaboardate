# frozen_string_literal: true

# == Schema Information
#
# Table name: checklists
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  ord        :integer          not null
#  card_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

# Checklists exist within cards and generally represent subtasks within a larger task
class Checklist < ApplicationRecord
  include Orderable
  ORD_ASSOC_FIELD = :card_id

  validates :title, :ord, :card, presence: true

  belongs_to :card

  has_one :list, through: :card

  has_one :board, through: :list
end
