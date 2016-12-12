export const RECEIVE_CARD_DETAIL = 'RECEIVE_CARD_DETAIL';

export const receiveCardDetail = (card) => {
  return {
    type: RECEIVE_CARD_DETAIL,
    card,
  };
};
