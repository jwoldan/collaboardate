# == Schema Information
#
# Table name: users
#
#  id                  :integer          not null, primary key
#  username            :string           not null
#  email               :string           not null
#  password_digest     :string           not null
#  session_token       :string           not null
#  full_name           :string           not null
#  initials            :string           not null
#  bio                 :text
#  avatar_file_name    :string
#  avatar_content_type :string
#  avatar_file_size    :integer
#  avatar_updated_at   :datetime
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#

class User < ApplicationRecord
  validates :username, :email, :session_token, uniqueness: true
  validates :password, length: { minimum: 8, allow_nil: true }
  validates :initials, length: { maximum: 3 }
  validates :email, format: /@/
  validates :username,
            :email,
            :password_digest,
            :session_token,
            :full_name,
            :initials,
            presence: true

  attr_reader :password

  after_initialize :ensure_session_token

  def self.generate_session_token
    token = nil
    while !token || User.find_by(session_token: token)
      token = SecureRandom.urlsafe_base64
    end
    token
  end

  def self.find_by_credentials(username_or_email, password)
    user = User.where(
      'username = ? OR email = ?',
      username_or_email,
      username_or_email).first

    user && user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  def generate_defaults

    unless self.username
      base_username = self.full_name.downcase.delete(' ')
      username = base_username
      number = 0
      while User.find_by(username: username)
        number += 1
        username = "#{base_username}#{number}"
      end
      self.username = username
    end

    unless self.initials
      initials = ''
      self.full_name.split(' ').each do |word|
        initials += word[0].upcase
      end
      self.initials = initials.slice(0, 3)
    end

  end

  private

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end


end
