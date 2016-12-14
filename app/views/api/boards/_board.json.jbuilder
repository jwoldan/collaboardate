json.extract! board, :id, :title, :starred, :visibility, :background, :creator_id
json.users do
  board.all_users.each do |user|
    json.set! user.id do
      json.partial! 'api/users/user', user: user
      if user.id != board.creator_id
        json.share_id user.received_shares.where(board_id: board.id).first.id
      end
    end
  end
end
