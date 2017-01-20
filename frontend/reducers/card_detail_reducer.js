import * as CardDetailActions from '../actions/card_detail_actions';
import * as CardActions from '../actions/card_actions';
import * as CommentActions from '../actions/comment_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  let newState;
  let comment;
  let comments;

  switch (action.type) {

    case CardDetailActions.RECEIVE_CARD_DETAIL:
      return Object.assign({}, action.card);

    case CardActions.RECEIVE_CARD:
      if (action.card.id === state.id)  {
        return Object.assign({}, state, action.card);
      } else {
        return state;
      }

    case CardActions.REMOVE_CARD:
      if(action.card.id === state.id) {
        return {};
      } else {
        return state;
      }

    case CommentActions.RECEIVE_COMMENT:
      comment = action.comment;
      if (state.id === comment.card_id) {
        newState = Object.assign({}, state);
        comments = newState.comments;
        comments = Object.assign({}, comments,
          { [comment.id]: comment }
        );
        newState.comments = comments;
        return newState;
      } else {
        return state;
      }

    case CommentActions.REMOVE_COMMENT:
      comment = action.comment;
      if (state.id === comment.card_id) {
        newState = Object.assign({}, state);
        comments = newState.comments;
        comments = Object.assign({}, comments);
        delete comments[action.comment.id];
        newState.comments = comments;
        return newState;
      } else {
        return state;
      }

    default:
      return state;

  }
};
