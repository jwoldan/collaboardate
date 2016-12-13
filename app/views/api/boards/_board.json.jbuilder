json.extract! board, :id, :title, :starred, :visibility, :background, :creator_id
json.users do
  board.all_users.each do |user|
    json.set! user.id do
      json.partial! 'api/users/user', user: user
    end
  end
end
