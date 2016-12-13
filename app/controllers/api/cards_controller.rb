class Api::CardsController < ApplicationController

  before_action :check_parent_board_visibility, only: [:index, :show]
  before_action :require_parent_board_access,
                only: [:create, :update, :destroy]

  def create
    @card = Card.new(card_params)
    @card.author = current_user

    if @card.save
      render :show
    else
      render json: @card.errors, status: 422
    end
  end

  def update
    @card = Card.find(params[:id])

    if @card.update(card_params)
      render :show
    else
      render json: @cards.errors, status: 422
    end
  end

  def index
    @cards = Card
      .includes(:list)
      .joins(:list)
      .where("lists.board_id = ?", params[:board_id])
    render :index
  end

  def show
    @card = Card.find(params[:id])
    render :show
  end

  def destroy
    @card = Card.find(params[:id])
    @card.destroy
    render :show
  end

  private

  def card_params
    params.require(:card).permit(:title, :description, :ord, :list_id)
  end

  def require_parent_board_access
    if params[:id]
      board_id = Card.find(params[:id]).board.id
    else
      board_id = List.find(params[:card][:list_id]).board_id
    end
    require_board_access(board_id)
  end

  def check_parent_board_visibility
    if params[:board_id]
      board_id = params[:board_id]
    else
      board_id = Card.find(params[:id]).board.id
    end
    check_board_visibility(board_id)
  end
end
