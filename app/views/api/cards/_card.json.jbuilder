json.extract! card, :id, :title, :description, :ord, :list_id, :author_id
json.board_id card.list.board_id
json.comment_count card.comments.count
