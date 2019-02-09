# frozen_string_literal: true

class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      login(@user)
      render :show
    else
      render json: ['Invalid credentials'], status: 401
    end
  end

  def destroy
    if current_user
      logout
      @user = User.new
      render :show
    else
      render json: ['No user to logout'], status: 404
    end
  end
end
