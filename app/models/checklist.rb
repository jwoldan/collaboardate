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
  include Orderable
  ORD_ASSOC_ID = :card_id

  validates :title, :ord, presence: true

  belongs_to :card

  has_one :list, through: :card

  has_one :board, through: :list

  def destroy
    Checklist.update_other_ords(self.card_id, self.ord, self.max_ord)
    super
  end

end
