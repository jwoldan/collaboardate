FactoryBot.define do
  factory :board_share do
    board
    sharer { board.creator }
    sharee
  end
end
