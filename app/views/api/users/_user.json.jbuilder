json.extract! user :id, :username, :full_name, :initials
json.avatar_thumb_url user.avatar.url(:thumb)
