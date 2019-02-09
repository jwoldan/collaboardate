# frozen_string_literal: true

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
  validates :email, :password_digest, :session_token, :full_name, presence: true
  validates :username, :initials, presence: true, on: :update
  validates :username, :email, :session_token, uniqueness: true
  validates :password, length: { minimum: 8, allow_nil: true }
  validates :full_name, length: { minimum: 3 }
  validates :initials, length: { maximum: 3 }
  validates :email, format: /@/

  before_validation :strip_whitespace

  attr_reader :password

  after_initialize :ensure_session_token, :generate_defaults

  has_attached_file :avatar, default_url: ''
  validates_attachment_content_type :avatar, content_type: %r{\Aimage/.*\Z}

  has_many :own_boards, class_name: 'Board', foreign_key: :creator_id
  has_many :own_lists, through: :own_boards, source: :lists
  has_many :own_cards, through: :own_lists, source: :cards
  has_many :authored_cards, class_name: 'Card', foreign_key: :author_id
  has_many :given_shares, class_name: 'BoardShare', foreign_key: :sharer_id
  has_many :received_shares, class_name: 'BoardShare', foreign_key: :sharee_id
  has_many :shared_boards, through: :received_shares, source: :board
  has_many :comments, foreign_key: :author_id

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
      username_or_email
    ).first

    user&.password_matches?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def password_matches?(password)
    BCrypt::Password.new(password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    save!
    session_token
  end

  def all_boards
    Board
      .includes(:creator)
      .left_outer_joins(:shares)
      .where(
        'boards.creator_id = ? OR board_shares.sharee_id = ?',
        id,
        id
      )
  end

  private

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def strip_whitespace
    self.username = username&.strip
    self.email = email&.strip
    self.full_name = full_name&.strip
    self.initials = initials&.strip
  end

  def generate_defaults
    generate_username
    generate_initials
  end

  def generate_username
    return if username
    return unless full_name

    base_username = full_name.downcase.delete(' ')
    username = base_username
    number = 0
    while User.where(username: username).exists?
      number += 1
      username = "#{base_username}#{number}"
    end
    self.username = username
  end

  def generate_initials
    return if initials
    return unless full_name

    self. initials = full_name.split
                              .slice(0, 3)
                              .map { |word| word.first.upcase }
                              .join || ''
  end
end
