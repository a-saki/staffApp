Rails.application.routes.draw do
  get 'sessions/new'

  root :to => 'sessions#new'
  get 'signup', to: "staffs#new"
  resources :staffs
  
  # get 'login', to: "sessions#new"
  post '/', to: "sessions#create"
  delete 'logout', to: "sessions#destroy"

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
