# frozen_string_literal: true

class Api::BoardSharesController < ApplicationController
  before_action :require_creator, only: [:show]
  before_action :require_shared_board_creator, only: %i[create destroy]

  def create
    @board_share = BoardShare.new(board_share_params)
    @board_share.sharer = current_user

    if @board_share.save
      render :show
    else
      render json: @board_share.errors, status: 422
    end
  end

  def index
    @board_shares = BoardShare
                    .includes(:sharee)
                    .where(board_id: params[:board_id])
    render :index
  end

  def show
    @board_share = BoardShare.find(params[:id])
    render :show
  end

  def destroy
    @board_share = BoardShare.find(params[:id])
    @board_share.destroy
    render :show
  end

  private

  def board_share_params
    params.require(:board_share).permit(:board_id, :sharee_id)
  end

  def require_creator
    if logged_in?
      board_share = BoardShare.find(params[:id])
      return if board_share.sharer?(current_user)
    end

    render json: 'Unauthorized access', status: 401
  end

  def require_shared_board_creator
    board_id = if params[:board_share]
                 params[:board_share][:board_id]
               else
                 BoardShare.find(params[:id]).board_id
               end
    require_board_creator(board_id)
  end
end
