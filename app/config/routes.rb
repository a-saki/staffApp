Rails.application.routes.draw do
  # get 'sessions/new'

  root :to => 'static_pages#home'
  get 'signup', to: "staffs#new"
  resources :staffs
  
  get 'login', to: "sessions#new"
  post 'login', to: "sessions#create"
  delete 'logout', to: "sessions#destroy"
  
  get '*path', controller: 'application', action: 'render_404'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
