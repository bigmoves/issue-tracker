AppkitRails::Application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :users
    end
  end

  # Uncomment when using 'history' as the location in Ember's router
  get '*foo', :to => 'landing#index'
end
