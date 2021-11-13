import * as CardAPIUtil from '../util/card_api_util';

export const RECEIVE_CARD_DETAIL = 'RECEIVE_CARD_DETAIL';

export const receiveCardDetail = card => ({
  type: RECEIVE_CARD_DETAIL,
  card,
});

export const fetchCardDetail = id => dispatch =>
  CardAPIUtil.fetchCard(id).then(card => {
    dispatch(receiveCardDetail(card));
    return card;
  });
