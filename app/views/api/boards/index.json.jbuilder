# frozen_string_literal: true

@boards.each do |board|
  json.set! board.id do
    json.partial! 'api/boards/board_summary', board: board
  end
end
