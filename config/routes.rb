Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  get    "login/show", to: 'login#show'
  post   "login/confirm_login", to: 'login#confirm_login'
  post   "login/logout", to: 'login#logout'

  get    'register/show', to: 'register#show'
  post   'register/confirm_registration', to: 'register#confirm_registration'

  get    'show', to: 'application#show'

  get    'job/show', to: 'job#show'
  get    'job/new', to: 'job#new'
  post   'job/create', to: 'job#create'
  get    'job/edit', to: 'job#edit'
  patch  'job/update', to: 'job#update'
  delete 'job/delete', to: 'job#delete'

  get    'user/profile', to: 'user#profile'
  get    'user/edit', to: 'user#edit'
  patch  'user/update', to: 'user#update'

  # Render dynamic PWA files from app/views/pwa/* (remember to link manifest in application.html.erb)
  # get "manifest" => "rails/pwa#manifest", as: :pwa_manifest
  # get "service-worker" => "rails/pwa#service_worker", as: :pwa_service_worker

  # Defines the root path route ("/")
  # root "posts#index"
end
