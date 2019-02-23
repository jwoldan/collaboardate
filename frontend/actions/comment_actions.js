import * as CommentAPIUtil from '../util/comment_api_util';
import { incrementCommentCount, decrementCommentCount } from './card_actions';

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

export const receiveComment = comment => {
  return {
    type: RECEIVE_COMMENT,
    comment,
  };
};

export const removeComment = comment => {
  return {
    type: REMOVE_COMMENT,
    comment,
  };
};

export const createComment = comment => {
  return dispatch => {
    return CommentAPIUtil.createComment(comment).then(newComment => {
      dispatch(receiveComment(newComment));
      dispatch(incrementCommentCount(newComment.card_id));
      return newComment;
    });
  };
};

export const updateComment = comment => {
  return dispatch => {
    return CommentAPIUtil.updateComment(comment).then(updatedComment => {
      dispatch(receiveComment(updatedComment));
      return updatedComment;
    });
  };
};

export const deleteComment = id => {
  return dispatch => {
    return CommentAPIUtil.deleteComment(id).then(deletedComment => {
      dispatch(removeComment(deletedComment));
      dispatch(decrementCommentCount(deletedComment.card_id));
      return deletedComment;
    });
  };
};
