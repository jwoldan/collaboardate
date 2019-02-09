# frozen_string_literal: true

module Users
  # Encapsulates all authentication related methods for the User model
  module Authentication
    extend ActiveSupport::Concern

    included do
      validates :password_digest, :session_token, presence: true
      validates :session_token, uniqueness: true
      validates :password, length: { minimum: 8, allow_nil: true }

      after_initialize :ensure_session_token

      attr_reader :password
    end

    class_methods do
      def generate_session_token
        token = nil
        loop do
          token = SecureRandom.urlsafe_base64
          break unless User.where(session_token: token).exists?
        end

        token
      end

      def find_by_credentials(username_or_email, password)
        user = User.where(
          'username = ? OR email = ?',
          username_or_email,
          username_or_email
        ).first

        user&.password_matches?(password) ? user : nil
      end
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

    private

    def ensure_session_token
      self.session_token ||= User.generate_session_token
    end
  end
end
