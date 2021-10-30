# frozen_string_literal: true

require_relative 'boot'

require 'rails/all'
require 'active_storage/engine'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Collaboardate
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 6.1

    # Configuration for the application, engines, and railties goes here.
    #
    # These settings can be overridden in specific environments using the files
    # in config/environments, which are processed later.
    #
    # config.time_zone = "Central Time (US & Canada)"
    # config.eager_load_paths << Rails.root.join("extras")

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
