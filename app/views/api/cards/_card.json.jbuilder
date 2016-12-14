json.extract! card, :id, :title, :description, :ord, :list_id, :author_id
json.board_id card.list.board_id
json.has_comments card.comments.any?
