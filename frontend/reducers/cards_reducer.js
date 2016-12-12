import * as CardActions from '../actions/card_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  let newCard;
  let newState;

  switch (action.type) {

    case CardActions.RECEIVE_CARDS:
      return Object.assign({}, action.cards);

    case CardActions.RECEIVE_CARD:
      newState = Object.assign({}, state);
      const currentCard = state[action.card.id];
      const currentListId = currentCard ? currentCard.list_id : null;
      const currentOrd = currentCard ? currentCard.ord : null;
      const newListId = action.card.list_id;
      const newOrd = action.card.ord;

      if (currentListId !== null && currentListId !== newListId) {
        newState = Object.assign(
          newState,
          updateOtherCardOrds(state, currentListId, currentOrd, null),
          updateOtherCardOrds(state, newListId, null, newOrd)
        );
      } else if (currentOrd !== null && currentOrd !== newOrd) {
        newState = Object.assign(
          newState,
          updateOtherCardOrds(state, newListId, currentOrd, newOrd)
        );
      }

      newState[action.card.id] = action.card;
      return newState;

    case CardActions.REMOVE_CARD:
      const { list_id, ord } = action.card;

      newState = Object.assign({}, state,
        updateOtherCardOrds(state, list_id, ord, null)
      );
      delete newState[action.card.id];
      return newState;

    default:
      return state;
  }
};

const updateOtherCardOrds = (state, listId, currentOrd, newOrd) => {
    const newState = {};

    // Get an array of just the cards in the current list
    const listCards = Object.keys(state)
      .map((key) => state[key])
      .filter((card) => card.list_id === listId);

    // Initial value of -1 would only be returned if no cards exist,
    // Otherwise we get the max ord.  Either way, add 1.
    const nextOrd = listCards.map((card) => card.ord)
      .reduce((x, y) => ((x > y) ? x : y), -1) + 1;

    if (newOrd === null) newOrd = nextOrd;
    if (currentOrd === null) currentOrd = nextOrd;

    if (currentOrd > newOrd) {
      listCards.forEach((card) => {
        if (card.ord < currentOrd && card.ord >= newOrd) {
          newState[card.id] = Object.assign({}, card, { ord: card.ord + 1 });
        } else {
          newState[card.id] = card;
        }
      });
    } else if (currentOrd < newOrd) {
      listCards.forEach((card) => {
        if(card.ord > currentOrd && card.ord <= newOrd) {
          newState[card.id] = Object.assign({}, card, { ord: card.ord - 1 });
        } else {
          newState[card.id] = card;
        }
      });
    }

    return newState;
};
