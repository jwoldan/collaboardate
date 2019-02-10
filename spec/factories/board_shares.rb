# frozen_string_literal: true

FactoryBot.define do
  factory :board_share do
    board
    sharer { board.creator }
    sharee
  end
end

# == Schema Information
#
# Table name: board_shares
#
#  id         :integer          not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  board_id   :integer          not null
#  sharee_id  :integer          not null
#  sharer_id  :integer          not null
#
# Indexes
#
#  index_board_shares_on_board_id                (board_id)
#  index_board_shares_on_sharee_id_and_board_id  (sharee_id,board_id) UNIQUE
#  index_board_shares_on_sharer_id               (sharer_id)
#
