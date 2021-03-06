# frozen_string_literal: true

@board_shares.each do |board_share|
  json.set! board_share.id do
    json.partial! 'api/board_shares/board_share', board_share: board_share
  end
end
