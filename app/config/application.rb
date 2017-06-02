require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module App
  class Application < Rails::Application
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.
    
  config.action_view.field_error_proc = Proc.new do |html_tag, instance|
    %Q(<div class="ui left icon input field_with_errors">#{html_tag}</div>).html_safe
  end
  # validateのエラー日本語化
  config.i18n.default_locale = :ja
  config.i18n.load_path += Dir[Rails.root.join('path', 'to', 'ymlfile', '*.{yml}').to_s]
    
  end
end
