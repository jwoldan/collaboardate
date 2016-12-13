class Api::BoardSharesController < ApplicationController

  before_action :require_creator, only: [:show]
  before_action :require_shared_board_creator, only: [:create, :destroy]

  def create
    @board_share = BoardShare.new(board_share_params)
    @board_share.sharer = current_user

    if @board_share.save
      render :show
    else
      render json: @board_share.errors, status: 422
    end
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
    board_share = BoardShare.find(params[:id])
    if !current_user || board_share.sharer_id != current_user.id
      render json: "Unauthorized access", status: 401
    end
  end

  def require_shared_board_creator
    if params[:board_share]
      board_id = params[:board_share][:board_id]
    else
      board_id = BoardShare.find(params[:id]).board_id
    end
    require_board_creator(board_id)
  end

end
