import * as CardDetailActions from '../actions/card_detail_actions';

export default (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {

    case CardDetailActions.RECEIVE_CARD_DETAIL:
      return Object.assign({}, action.card);

    default:
      return state;

  }
};
