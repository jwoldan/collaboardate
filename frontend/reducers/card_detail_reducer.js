import * as CardDetailActions from '../actions/card_detail_actions';
import * as CardActions from '../actions/card_actions';

export default (state = {}, action) => {
  Object.freeze(state);

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

    default:
      return state;

  }
};
