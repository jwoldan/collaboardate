json.extract! board, :id, :title, :starred, :visibility, :background
json.creator do
  json.partial! 'api/users/user', user: board.creator
end
