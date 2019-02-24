# frozen_string_literal: true

class Api::UsersController < ApplicationController
  before_action :require_logged_in, only: %i[show search]
  before_action :require_self, only: %i[update remove_avatar]

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  def update
    @user = User.find(params[:id])

    if @user.update(user_params)
      render :show
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  def show
    @user = User.find_by(username: params[:username])
    # TODO: add special handling for current_user
    if @user
      render :show
    else
      render json: ['User not found'], status: :not_found
    end
  end

  def remove_avatar
    @user = User.find(params[:user_id])

    if @user
      @user.avatar.destroy
      @user.avatar.clear
      @user.save
      render :show
    else
      render json: ['An error occurred'], status: :unprocessable_entity
    end
  end

  def search
    @users = if params[:query].present?
               User.where(
                 'username ~ ? AND id != ?',
                 params[:query],
                 current_user.id
               )
             else
               User.none
             end
    render :search
  end

  private

  def user_params
    params.require(:user).permit(
      :username,
      :email,
      :password,
      :full_name,
      :initials,
      :bio,
      :avatar
    )
  end

  def require_self
    require_logged_in
    if current_user.id != params[:id].to_i &&
       current_user.id != params[:user_id].to_i
      render json: 'Unauthorized access', status: :unauthorized
    end
  end
end
