class Api::UsersController < ApplicationController

  before_action :require_logged_in, only: :show

  def create
    @user = User.new(user_params)
    @user.generate_defaults
    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
    # TODO add special handling for current_user
    render :show
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
