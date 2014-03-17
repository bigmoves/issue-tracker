AppkitRails::Application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :users, except: [:new, :edit]
      resources :labels, except: [:new, :edit]
      resources :comments, except: [:new, :edit]
      resources :issues, except: [:new, :edit]
    end
  end

  # Uncomment when using 'history' as the location in Ember's router
  get '*foo', :to => 'landing#index'
end
