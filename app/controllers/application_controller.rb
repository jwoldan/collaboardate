# frozen_string_literal: true

class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user, :logged_in?

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def logged_in?
    current_user.present?
  end

  def login(user)
    session[:session_token] = user.reset_session_token!
    @current_user = user
  end

  def logout
    current_user.reset_session_token! if logged_in?
    session[:session_token] = nil
    @current_user = nil
  end

  private

  def require_logged_in
    render json: 'Unauthorized access', status: :unauthorized unless logged_in?
  end

  def require_board_creator(board_id)
    if logged_in?
      board = Board.find(board_id)
      return if board.creator?(current_user)
    end

    render json: 'Unauthorized access', status: :unauthorized
  end

  def require_board_access(board_id)
    if logged_in?
      board = Board.find(board_id)
      return if board.creator?(current_user)
      return if board.shared_with?(current_user)
    end

    render json: 'Unauthorized access', status: :unauthorized
  end

  def check_board_visibility(board_id)
    board = Board.find(board_id)
    return if board.public?

    require_board_access(board_id)
  end
end
