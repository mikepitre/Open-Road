Rails.application.routes.draw do
  resources :application
  resources :sessions
  resources :trips
  resources :users

  get  'login', to: 'sessions#new',    as: 'login'
  post 'login', to: 'sessions#create', as: 'create_session'
  get 'logout', to: 'sessions#destroy', as: 'logout'

  post 'trips/notify', to: 'trips#notify'

  root 'application#index'
end


# Prefix Verb   URI Pattern                     Controller#Action
# application_index GET    /application(.:format)          application#index
#                   POST   /application(.:format)          application#create
#   new_application GET    /application/new(.:format)      application#new
#  edit_application GET    /application/:id/edit(.:format) application#edit
#       application GET    /application/:id(.:format)      application#show
#                   PATCH  /application/:id(.:format)      application#update
#                   PUT    /application/:id(.:format)      application#update
#                   DELETE /application/:id(.:format)      application#destroy
#          sessions GET    /sessions(.:format)             sessions#index
#                   POST   /sessions(.:format)             sessions#create
#       new_session GET    /sessions/new(.:format)         sessions#new
#      edit_session GET    /sessions/:id/edit(.:format)    sessions#edit
#           session GET    /sessions/:id(.:format)         sessions#show
#                   PATCH  /sessions/:id(.:format)         sessions#update
#                   PUT    /sessions/:id(.:format)         sessions#update
#                   DELETE /sessions/:id(.:format)         sessions#destroy
#             trips GET    /trips(.:format)                trips#index
#                   POST   /trips(.:format)                trips#create
#          new_trip GET    /trips/new(.:format)            trips#new
#         edit_trip GET    /trips/:id/edit(.:format)       trips#edit
#              trip GET    /trips/:id(.:format)            trips#show
#                   PATCH  /trips/:id(.:format)            trips#update
#                   PUT    /trips/:id(.:format)            trips#update
#                   DELETE /trips/:id(.:format)            trips#destroy
#             users GET    /users(.:format)                users#index
#                   POST   /users(.:format)                users#create
#          new_user GET    /users/new(.:format)            users#new
#         edit_user GET    /users/:id/edit(.:format)       users#edit
#              user GET    /users/:id(.:format)            users#show
#                   PATCH  /users/:id(.:format)            users#update
#                   PUT    /users/:id(.:format)            users#update
#                   DELETE /users/:id(.:format)            users#destroy
#             login GET    /login(.:format)                sessions#new
#    create_session POST   /login(.:format)                sessions#create
#            logout GET    /logout(.:format)               sessions#destroy
#              root GET    /                               application#index
