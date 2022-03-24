Rails.application.routes.draw do
  
  resources :reviews, only: [:create, :destroy, :update, :index]
  resources :restaurants, only: [:index, :show]
  resources :users, only: [:create, :index]

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
