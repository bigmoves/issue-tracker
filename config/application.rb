require File.expand_path('../boot', __FILE__)

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(:default, Rails.env)

module AppkitRails
  class Application < Rails::Application
    config.ember.api_version = '1'
    config.ember.namespaces.app = 'app'
    config.ember.paths.app = 'client/app'
    # Modules in client/app are just prefixed with app
    config.ember.prefix_patterns.app = Regexp.new('^' + Regexp.escape(File.join(::Rails.root, config.ember.paths.app)))

    config.ember.namespaces.config = 'config'
    config.ember.paths.config = 'client/config'
    # Modules in client/config are just prefixed with config
    config.ember.prefix_patterns.config = Regexp.new('^' + Regexp.escape(File.join(::Rails.root, config.ember.paths.config)))
  end
end
