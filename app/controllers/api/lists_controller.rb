# frozen_string_literal: true

class Api::ListsController < ApplicationController
  before_action :check_parent_board_visibility, only: %i[index show]
  before_action :require_parent_board_access,
                only: %i[create update destroy]

  def create
    @list = List.new(list_params)

    if @list.save
      render :show
    else
      render json: @list.errors, status: :unprocessable_entity
    end
  end

  def update
    @list = List.find(params[:id])

    if @list.update(list_params)
      render :show
    else
      render json: @list.errors, status: :unprocessable_entity
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

  def require_parent_board_access
    board_id = if params[:id]
                 List.find(params[:id]).board_id
               else
                 params[:list][:board_id]
               end
    require_board_access(board_id)
  end

  def check_parent_board_visibility
    board_id = params[:board_id] || List.find(params[:id]).board_id
    check_board_visibility(board_id)
  end
end
