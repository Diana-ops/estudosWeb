Rails.application.routes.draw do
  root to: 'home#index'
  get 'detalhes' => 'home#detalhes'
  resources :recipes
end
