import * as CardAPIUtil from '../util/card_api_util';

export const RECEIVE_CARDS = 'RECEIVE_CARDS';
export const RECEIVE_CARD = 'RECEIVE_CARD';
export const REMOVE_CARD = 'REMOVE_CARD';

export const receiveCards = (cards) => {
  return {
    type: RECEIVE_CARDS,
    cards,
  };
};

export const receiveCard = (card) => {
  return {
    type: RECEIVE_CARD,
    card,
  };
};

export const removeCard = (card) => {
  return {
    type: REMOVE_CARD,
    card,
  };
};

export const createCard = (card) => {
  return dispatch => {
    return CardAPIUtil.createCard(card).then(
      newCard => {
        dispatch(receiveCard(newCard));
        return newCard;
      }
    );
  };
};

export const updateCard = (card) => {
  return dispatch => {
    return CardAPIUtil.updateCard(card).then(
      updatedCard => {
        dispatch(receiveCard(updatedCard));
        return updatedCard;
      }
    );
  };
};

export const fetchCards = (boardId) => {
  return dispatch => {
    return CardAPIUtil.fetchCards(boardId).then(
      cards => {
        dispatch(receiveCards(cards));
        return cards;
      }
    );
  };
};

export const fetchCard = (id) => {
  return dispatch => {
    return CardAPIUtil.fetchCard(id).then(
      card => {
        dispatch(receiveCard(card));
        return card;
      }
    );
  };
};

export const deleteCard = (id) => {
  return dispatch => {
    return CardAPIUtil.deleteCard(id).then(
      deletedCard => {
        dispatch(removeCard(deletedCard));
        return deletedCard;
      }
    );
  };
};
