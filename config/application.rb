# frozen_string_literal: true

require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Collaboardate
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 5.0

    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration can go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded after loading
    # the framework and any gems in your application.

    # disable test unit generation
    config.generators do |g|
      g.test_framework :rspec
    end

    config.paperclip_defaults = {
      storage: :s3,
      s3_credentials: {
        bucket: ENV['s3_bucket'],
        access_key_id: ENV['s3_access_key_id'],
        secret_access_key: ENV['s3_secret_access_key'],
        s3_region: ENV['s3_region']
      }
    }
  end
end
