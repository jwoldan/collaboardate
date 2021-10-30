# frozen_string_literal: true

json.extract! user, :id, :username, :email, :full_name, :initials, :bio
# TODO: fix avatar issues
json.avatar_url user.avatar.attached? ? url_for(user.avatar) : nil
