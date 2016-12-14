json.extract! comment, :id, :body, :card_id, :author_id
json.created_at comment.created_at.to_s
json.created_at_i comment.created_at.to_i
json.board_id comment.board.id
