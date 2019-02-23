# frozen_string_literal: true

@cards.each do |card|
  json.set! card.id do
    json.partial! 'api/cards/card_summary', card: card
  end
end
