import * as CommentAPIUtil from '../util/comment_api_util';
import { incrementCommentCount, decrementCommentCount } from './card_actions';

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

export const receiveComment = (comment) => ({
  type: RECEIVE_COMMENT,
  comment,
});

export const removeComment = (comment) => ({
  type: REMOVE_COMMENT,
  comment,
});

export const createComment = (comment) => (dispatch) =>
  CommentAPIUtil.createComment(comment).then((newComment) => {
    dispatch(receiveComment(newComment));
    dispatch(incrementCommentCount(newComment.card_id));
    return newComment;
  });

export const updateComment = (comment) => (dispatch) =>
  CommentAPIUtil.updateComment(comment).then((updatedComment) => {
    dispatch(receiveComment(updatedComment));
    return updatedComment;
  });

export const deleteComment = (id) => (dispatch) =>
  CommentAPIUtil.deleteComment(id).then((deletedComment) => {
    dispatch(removeComment(deletedComment));
    dispatch(decrementCommentCount(deletedComment.card_id));
    return deletedComment;
  });
