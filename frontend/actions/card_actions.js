import { normalize } from 'normalizr';

import * as CardAPIUtil from '../util/card_api_util';
import { cardListSchema, cardSchema } from '../schema';

export const RECEIVE_CARDS = 'RECEIVE_CARDS';
export const RECEIVE_CARD = 'RECEIVE_CARD';
export const REMOVE_CARD = 'REMOVE_CARD';
export const INCREMENT_COMMENT_COUNT = 'INCREMENT_COMMENT_COUNT';
export const DECREMENT_COMMENT_COUNT = 'DECREMENT_COMMENT_COUNT';

export const receiveCards = cards => {
  return {
    type: RECEIVE_CARDS,
    payload: normalize(cards, cardListSchema),
  };
};

export const receiveCard = card => {
  return {
    type: RECEIVE_CARD,
    payload: normalize(card, cardSchema),
  };
};

export const removeCard = card => {
  return {
    type: REMOVE_CARD,
    payload: normalize(card, cardSchema),
  };
};

export const incrementCommentCount = cardId => {
  return {
    type: INCREMENT_COMMENT_COUNT,
    cardId,
  };
};

export const decrementCommentCount = cardId => {
  return {
    type: DECREMENT_COMMENT_COUNT,
    cardId,
  };
};

export const createCard = card => {
  return dispatch => {
    return CardAPIUtil.createCard(card).then(newCard => {
      dispatch(receiveCard(newCard));
      return newCard;
    });
  };
};

export const updateCard = card => {
  return dispatch => {
    return CardAPIUtil.updateCard(card).then(updatedCard => {
      dispatch(receiveCard(updatedCard));
      return updatedCard;
    });
  };
};

export const fetchCards = boardId => {
  return dispatch => {
    return CardAPIUtil.fetchCards(boardId).then(cards => {
      dispatch(receiveCards(cards));
      return cards;
    });
  };
};

export const fetchCard = id => {
  return dispatch => {
    return CardAPIUtil.fetchCard(id).then(card => {
      dispatch(receiveCard(card));
      return card;
    });
  };
};

export const deleteCard = id => {
  return dispatch => {
    return CardAPIUtil.deleteCard(id).then(deletedCard => {
      dispatch(removeCard(deletedCard));
      return deletedCard;
    });
  };
};
