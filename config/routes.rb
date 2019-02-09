# frozen_string_literal: true

Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'
  # get '/.well-known/acme-challenge/EbnlbXqN9gulrkzp_zrHNLIQylXvlrf-mDruBekgJ_I' => 'static_pages#letsencrypt'
  # get '/.well-known/acme-challenge/qWPxvmsFSnmOFX8SDqGcdRjfdFifA98VCw40gCO-X6M' => 'static_pages#letsencrypt'

  namespace :api, defaults: { format: :json } do
    resources :users, only: %i[create update] do
      get 'search', on: :collection
      get ':username', to: 'users#show', on: :collection
      delete 'avatar', to: 'users#remove_avatar'
    end
    resource :session, only: %i[create destroy]

    resources :boards, except: %i[new edit] do
      resources :lists, only: :index
      resources :cards, only: :index
      resources :board_shares, only: :index
    end

    resources :lists, except: %i[new edit index]
    resources :cards, except: %i[new edit index]
    resources :board_shares, only: %i[create show destroy]
    resources :comments, except: %i[new edit index]
  end
end
