json.extract! user, :id, :username, :email, :full_name, :initials, :bio
# TODO fix avatar issues
json.avatar_url (user.avatar.url != "" ? user.avatar.url : nil)
