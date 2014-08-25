require File.expand_path('../boot', __FILE__)
require 'rails/all'
require 'browserify-rails'
# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)
module Project
  class Application < Rails::Application
     config.assets.enabled = true
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.

    # Set Time.zone default to the specified zone and make Active Record auto-convert to this zone.
    # Run "rake -D time" for a list of tasks for finding time zone names. Default is UTC.
    # config.time_zone = 'Central Time (US & Canada)'

    # The default locale is :en and all translations from config/locales/*.rb,yml are auto loaded.
    # config.i18n.load_path += Dir[Rails.root.join('my', 'locales', '*.{rb,yml}').to_s]
    # config.i18n.default_locale = :de
    
    #browserify rails
    config.browserify_rails.commandline_options = "-t reactify"
   
     # add fonts to the asset pipeline
    config.assets.paths << Rails.root.join("app", "assets", "fonts")
    config.assets.paths << Rails.root.join("app", "assets", "plugins")
     # add react to the asset pipeline
    config.assets.paths << Rails.root.join("node_modules/alacalc")

    config.browserify_rails.paths << "node_modules/alacalc"
    
    # add precompile file types for images
    config.assets.precompile += %w[*.png *.jpg *.jpeg *.gif *.eot *.svg *.ttf *.woff *.css *.css.erb *.js] 
  end
end
