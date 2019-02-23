# frozen_string_literal: true

json.partial! 'api/boards/board_summary', board: board

json.lists board.ordered_lists do |list|
  json.partial! 'api/lists/list_details', list: list
end
