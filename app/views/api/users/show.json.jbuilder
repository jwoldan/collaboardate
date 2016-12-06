json.partial! 'api/users/user', user: @user
json.email @user.email
json.bio @user.bio
json.avatar_url @user.avatar.url
