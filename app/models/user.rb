# frozen_string_literal: true

# Represents a user of the application
class User < ApplicationRecord
  include Users::Authentication

  validates :email, :full_name, presence: true
  validates :username, :initials, presence: true, on: :update
  validates :username, :email, uniqueness: true
  validates :full_name, length: { minimum: 3 }
  validates :initials, length: { maximum: 3 }
  validates :email, format: /@/

  after_initialize :generate_defaults
  before_validation :strip_whitespace

  has_one_attached :avatar

  has_many :own_boards,
           class_name: 'Board',
           foreign_key: :creator_id,
           inverse_of: :creator,
           dependent: :destroy
  has_many :own_lists, through: :own_boards, source: :lists
  has_many :own_cards, through: :own_lists, source: :cards
  has_many :authored_cards,
           class_name: 'Card',
           foreign_key: :author_id,
           inverse_of: :author,
           dependent: :destroy
  has_many :given_shares,
           class_name: 'BoardShare',
           foreign_key: :sharer_id,
           inverse_of: :sharer,
           dependent: :destroy
  has_many :received_shares,
           class_name: 'BoardShare',
           foreign_key: :sharee_id,
           inverse_of: :sharee,
           dependent: :destroy
  has_many :shared_boards, through: :received_shares, source: :board
  has_many :comments,
           foreign_key: :author_id,
           inverse_of: :author,
           dependent: :destroy

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
    while User.exists?(username: username)
      number += 1
      username = "#{base_username}#{number}"
    end
    self.username = username
  end

  def generate_initials
    return if initials
    return unless full_name

    self.initials = full_name.split
                             .slice(0, 3)
                             .map { |word| word.first.upcase }
                             .join || ''
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
