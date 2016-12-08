class Api::BoardsController < ApplicationController

  before_action :require_logged_in, only: [:create, :index]
  before_action :check_visibility, only: :show
  before_action :require_creator, only: [:update, :destroy]

  def create
    @board = current_user.own_boards.new(board_params)

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

  def require_creator
    board = Board.find(params[:id])
    if !current_user || board.creator_id != current_user.id
      render json: "Unauthorized access", status: 401
    end
  end

  def check_visibility
    board = Board.find(params[:id])
    if board.visibility == Board::VISIBILITY_PRIVATE
      require_creator
    end
  end

end
