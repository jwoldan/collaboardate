class Api::ListsController < ApplicationController

  before_action :require_logged_in, only: [:create]
  before_action :check_board_visibility, only: [:index, :show]
  before_action :require_board_creator, only: [:update, :destroy]

  def create
    @list = List.new(list_params)

    if @list.save
      render :show
    else
      render json @list.errors, status: 422
    end
  end

  def update
    @list = List.find(params[:id])

    if @list.update(list_params)
      render :show
    else
      render json: @list.errors, status: 422
    end
  end

  def index
    @lists = List.where(board_id: params[:board_id])
    render :index
  end

  def show
    @list = List.find(params[:id])
    render :show
  end

  def destroy
    @list = List.find(params[:id])
    @list.destroy
    render :show
  end

  private

  def list_params
    params.require(:list).permit(:title, :order, :board_id)
  end

  def require_board_creator
    list = List.find(params[:id])
    super(list.board_id)
  end

  def check_board_visibility
    list.List.find(params[:id])
    super(list.board_id)
  end

end
