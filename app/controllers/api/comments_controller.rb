# frozen_string_literal: true

class Api::CommentsController < ApplicationController
  before_action :require_creator, only: %i[update destroy]
  before_action :check_parent_board_visibility, only: [:show]
  before_action :require_parent_board_access, only: [:create]

  def create
    @comment = Comment.new(comment_params)
    @comment.author = current_user

    if @comment.save
      render :show
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  def update
    @comment = Comment.find(params[:id])

    if @comment.update(comment_params)
      render :show
    else
      render json: @comment.errors, status: :unprocessable_entity
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

  def require_creator
    if logged_in?
      comment = Comment.find(params[:id])
      return if comment.author?(current_user)
    end

    render json: 'Unauthorized access', status: :unauthorized
  end

  def require_parent_board_access
    board_id = if params[:id]
                 Comment.find(params[:id]).board_id
               else
                 Card.find(params[:comment][:card_id]).board_id
               end
    require_board_access(board_id)
  end

  def check_parent_board_visibility
    board_id = Comment.find(params[:id]).board.id
    check_board_visibility(board_id)
  end
end
