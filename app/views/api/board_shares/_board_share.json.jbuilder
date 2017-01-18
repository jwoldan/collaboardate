json.extract! board_share, :id, :board_id, :sharer_id
json.sharee do
  json.partial! 'api/users/user', user: board_share.sharee
  json.share_id board_share.id
end
