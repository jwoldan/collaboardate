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

class Checklist < ApplicationRecord
  validates :title, :ord, presence: true

  belongs_to :card

  has_one :list,
    through: :card

  has_one :board,
    through: :list

  before_validation :ensure_ord

  def self.max_ord(card_id)
    Checklist.where(card_id: card_id).maximum(:ord)
  end

  def self.next_ord(card_id)
    max_ord = Checklist.max_ord(card_id)
    max_ord ? max_ord + 1 : 0
  end

  def max_ord
    Checklist.max_ord(self.card_id)
  end

  def next_ord
    Checklist.next_ord(self.card_id)
  end

  private

  def ensure_ord
    unless self.ord
      self.ord = next_ord
    end
  end

end
