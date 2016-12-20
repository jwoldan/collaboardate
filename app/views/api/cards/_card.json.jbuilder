json.extract! card,
  :id, :title, :description, :ord, :list_id,
  :author_id, :due_date, :due_date_complete
json.board_id card.list.board_id
json.comment_count card.comments.size
