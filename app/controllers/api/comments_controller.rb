class Api::CommentsController < ApplicationController

  before_action :check_parent_board_visibility, only: [:show]
  before_action :require_parent_board_access, only: [:create, :update, :destroy]

  def create
    @comment = Comment.new(comment_params)
    @comment.author = current_user

    if @comment.save
      render :show
    else
      render json: @comment.errors, status: 422
    end
  end

  def update
    @comment = Comment.find(params[:id])

    if @comment.update(comment_params)
      render :show
    else
      render json: @comment.errors, status: 422
    end
  end

  def show
    @comment = Comment.find(params[:id])
    render :show
  end

  def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy
    render :show
  end

  private

  def comment_params
    params.require(:comment).permit(:body, :card_id)
  end

  def require_parent_board_access
    if params[:id]
      board_id = Comment.find(params[:id]).board.id
    else
      board_id = Card.find(params[:comment][:card_id]).board_id
    end
    require_board_access(board_id)
  end

  def check_parent_board_visibility
    board_id = Comment.find(params[:id]).board.id
    check_board_visibility(board_id)
  end

end
