class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user, :logged_in?

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def logged_in?
    !!current_user
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
    render json: "Unauthorized access", status: 401 unless logged_in?
  end

  def require_board_creator(board_id)
    board = Board.find(board_id)
    if !current_user || board.creator_id != current_user.id
      render json: "Unauthorized access", status: 401
    end
  end

  def require_board_access(board_id)
    board = Board.find(board_id)
    if current_user
      return if board.creator_id == current_user.id
      authorized = false
      board.shares.each do |share|
        authorized = true if share.sharee_id == current_user.id
      end
    end
    render json: "Unauthorized access", status: 401 unless authorized
  end

  def check_board_visibility(board_id)
    board = Board.find(board_id)
    if board.visibility == Board::VISIBILITY_PRIVATE
      require_board_creator(board_id)
    end
  end

end
