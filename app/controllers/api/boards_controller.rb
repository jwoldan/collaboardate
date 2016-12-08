class Api::BoardsController < ApplicationController

  before_action :require_logged_in, except: :show
  before_action :check_visibility, only: :show

  def create
    @board = Board.new(board_params)

    if @board.save
      render :short_show
    else
      render json: @board.errors, status: 422
    end
  end

  def update
    @board = Board.find(params[:id])

    if @board.update(board_params)
      render :short_show
    else
      render json: @board.errors, status: 422
    end
  end

  def index
    @boards = current_user.own_boards
    render :index
  end

  def show
    @board = Board.find(params[:id])
    render :show
  end

  def destroy
    @board = Board.find(params[:id])
    @board.destroy
    render :short_show
  end

  private

  def board_params
    params.require(:board).permit(:title, :starred, :visibility, :background)
  end

  def check_visibility
    board = Board.find(params[:id])
    require_logged_in if board.visibility == Board::VISIBILITY_PRIVATE
    if Board.creator_id != current_user.id
      render json: "Unauthorized access", status: 401
    end
  end

end
