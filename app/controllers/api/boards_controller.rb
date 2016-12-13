class Api::BoardsController < ApplicationController

  before_action :require_logged_in, only: [:create, :index, :shared_boards]
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
    @boards = current_user.own_boards.includes(:creator, :sharees)
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
    require_board_creator(params[:id])
  end

  def check_visibility
    check_board_visibility(params[:id])
  end

end
