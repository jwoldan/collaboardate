class Api::UsersController < ApplicationController

  before_action :require_logged_in, only: [:show, :search]

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors, status: 422
    end
  end

  def show
    @user = User.find_by(username: params[:username])
    # TODO add special handling for current_user
    if @user
      render :show
    else
      render json: ['User not found'], status: 404
    end
  end

  def search
    if params[:query].present?
      @users = User.where(
        "username ~ ? AND id != ?",
        params[:query],
        current_user.id
      )
    else
      @users = User.none
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

end
