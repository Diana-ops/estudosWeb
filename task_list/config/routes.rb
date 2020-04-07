Rails.application.routes.draw do
  root to: 'home#welcome'
  resources :tasks
end
