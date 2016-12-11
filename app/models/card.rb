# == Schema Information
#
# Table name: cards
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  description :text
#  ord         :integer          not null
#  list_id     :integer          not null
#  author_id   :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Card < ApplicationRecord
  validates :title, :ord, :list, :author, presence: true

  belongs_to :list

  belongs_to :author,
    class_name: 'User'

  has_one :board,
    through: :list

  before_validation :ensure_ord

  def max_ord
    Card.where(list_id: self.list_id).maximum(:ord)
  end

  def next_ord
    max_ord = self.max_ord
    max_ord ? max_ord + 1 : 0
  end

  def destroy
    self.ord = max_ord
    super
  end

  private

  def ensure_ord
    unless self.ord
      self.ord = next_ord
    end
  end

end
