source "https://rubygems.org"

# Bundle edge Rails instead: gem "rails", github: "rails/rails", branch: "main"
gem "rails", "~> 7.x"

# Use postgresql as the database for Active Record
gem 'pg', '~> 1.6'

# Use JavaScript with ESM import maps [https://github.com/rails/importmap-rails]
gem "importmap-rails"

# Build JSON APIs with ease [https://github.com/rails/jbuilder]
gem "jbuilder"

# Use Active Model has_secure_password [https://guides.rubyonrails.org/active_model_basics.html#securepassword]
# gem "bcrypt", "~> 3.1.7"

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem "tzinfo-data", platforms: %i[ windows jruby ]

# Use the database-backed adapters for Rails.cache, Active Job, and Action Cable
gem "solid_cache"
gem "solid_queue"
gem "solid_cable"

# Reduces boot times through caching; required in config/boot.rb
gem "bootsnap", require: false

# Deploy this application anywhere as a Docker container [https://kamal-deploy.org]
gem "kamal", require: false

# Add HTTP asset caching/compression and X-Sendfile acceleration to Puma [https://github.com/basecamp/thruster/]
gem "thruster", require: false

gem 'react-rails'

gem 'oj'

gem 'puma', '< 8'
gem 'activerecord-session_store'
gem 'vite_rails'
# Browser detection
gem 'browser'
# Hotwire's SPA-like page accelerator [https://turbo.hotwired.dev]
gem 'turbo-rails'
gem "amazing_print"
gem "rails_semantic_logger"
# Hotwire's modest JavaScript framework [https://stimulus.hotwired.dev]
gem 'stimulus-rails'
# Used with scheduled tasks at least
gem 'lockfile'

# Translation conversion to JSON
gem "i18n-js"
# JSON schema validator - Validate JSON objects against a JSON schema
gem 'json-schema'
gem 'jsonpath'
# Password validation
gem 'strong_password', '~> 0.0.10'
# File uploads & tus server
gem "shrine", "~> 3.0"
gem "tus-server", "~> 2.3"
gem "shrine-tus", "~> 2.1"
gem "image_processing", "~> 1.2"
# For action cable sub/pub
gem 'redis', '~> 5.0'
gem 'sprockets-rails'
gem 'sprockets'

gem 'bootstrap'
gem 'sassc-rails'
group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug'

  gem 'web-console'

  gem 'spring'

  gem 'foreman'

  # File changes
  gem 'listen'

  # API docs
  gem 'rspec-rails'

  # Memory profiling
  gem 'memory_profiler'

  # Formatting & linting
  gem 'standard', ">= 1.35.1"
  gem 'rubocop'
  gem 'rubocop-rails'
  gem 'rubocop-performance'
  gem 'solargraph'
  gem 'solargraph-rails'
  
  # Colorful prints
  gem 'colorize'
end

group :test do
  # Use system testing [https://guides.rubyonrails.org/testing.html#system-testing]
  gem "capybara"
  gem "selenium-webdriver"
end