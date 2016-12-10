class Api::ListsController < ApplicationController

  before_action :check_parent_board_visibility, only: [:index, :show]
  before_action :require_parent_board_creator,
                only: [:create, :update, :destroy]

  def create
    @list = List.new(list_params)

    if @list.save
      render :show
    else
      render json: @list.errors, status: 422
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
    params.require(:list).permit(:title, :ord, :board_id)
  end

  def require_parent_board_creator
    if params[:id]
      board_id = List.find(params[:id]).board_id
    else
      board_id = params[:list][:board_id]
    end
    require_board_creator(board_id)
  end

  def check_parent_board_visibility
    if params[:board_id]
      board_id = params[:board_id]
    else
      board_id = List.find(params[:id]).board_id
    end
    check_board_visibility(board_id)
  end

end
