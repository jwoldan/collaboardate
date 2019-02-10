# frozen_string_literal: true

# Checklists exist within cards and generally represent subtasks within a larger task
class Checklist < ApplicationRecord
  include Orderable
  ORD_ASSOC_FIELD = :card_id

  validates :title, :ord, :card, presence: true

  belongs_to :card
  has_one :list, through: :card
  has_one :board, through: :list
end

# == Schema Information
#
# Table name: checklists
#
#  id         :integer          not null, primary key
#  ord        :integer          not null
#  title      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  card_id    :integer          not null
#
# Indexes
#
#  index_checklists_on_card_id_and_ord  (card_id,ord)
#
