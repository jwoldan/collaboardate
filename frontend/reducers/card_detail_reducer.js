import * as CardDetailActions from '../actions/card_detail_actions';
import * as CardActions from '../actions/card_actions';
import * as CommentActions from '../actions/comment_actions';

export default (state = {}, action = {}) => {
  Object.freeze(state);
  let newState;
  let comment;
  let comments;

  switch (action.type) {
    case CardDetailActions.RECEIVE_CARD_DETAIL:
      return { ...action.card };

    case CardActions.RECEIVE_CARD: {
      const cardId = action.payload.result;
      const card = action.payload.entities.cards[cardId];
      if (cardId === state.id) {
        return { ...state, ...card };
      }
      return state;
    }
    case CardActions.REMOVE_CARD: {
      const cardId = action.payload.result;
      if (cardId === state.id) {
        return {};
      }
      return state;
    }

    case CommentActions.RECEIVE_COMMENT:
      comment = action.comment;
      if (state.id === comment.card_id) {
        newState = { ...state };
        comments = newState.comments;
        comments = { ...comments, [comment.id]: comment };
        newState.comments = comments;
        return newState;
      }
      return state;

    case CommentActions.REMOVE_COMMENT:
      comment = action.comment;
      if (state.id === comment.card_id) {
        newState = { ...state };
        comments = newState.comments;
        comments = { ...comments };
        delete comments[action.comment.id];
        newState.comments = comments;
        return newState;
      }
      return state;

    default:
      return state;
  }
};
