# frozen_string_literal: true

FactoryBot.define do
  factory :user, aliases: %i[creator author sharer sharee] do
    initialize_with do
      new(full_name: Faker::Name.name_with_middle)
    end
    sequence(:email) { Faker::Internet.email }
    sequence(:password) { Faker::Internet.password }
  end
end

# == Schema Information
#
# Table name: users
#
#  id                  :integer          not null, primary key
#  avatar_content_type :string
#  avatar_file_name    :string
#  avatar_file_size    :integer
#  avatar_updated_at   :datetime
#  bio                 :text
#  email               :string           not null
#  full_name           :string           not null
#  initials            :string           not null
#  password_digest     :string           not null
#  session_token       :string           not null
#  username            :string           not null
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#
# Indexes
#
#  index_users_on_email          (email) UNIQUE
#  index_users_on_session_token  (session_token) UNIQUE
#  index_users_on_username       (username) UNIQUE
#
