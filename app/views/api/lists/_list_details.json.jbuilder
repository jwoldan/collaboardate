# frozen_string_literal: true

json.partial! 'api/lists/list_summary', list: list

json.cards list.ordered_cards do |card|
  json.partial! 'api/cards/card_summary', card: card
end
