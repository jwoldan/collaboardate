import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import CardDetail from './card_detail';

import { selectListByCardId, selectComments, menuIsOpen } from '../../reducers/selectors';
import { updateCard, deleteCard } from '../../actions/card_actions';
import { receiveCardDetail } from '../../actions/card_detail_actions';
import { resetMenus } from '../../actions/menu_status_actions';

const CardDetailContainer = () => {
  const navigate = useNavigate();

  const { card, comments, list, menuIsOpenState } = useSelector(state => ({
    card: state.cardDetail,
    comments: selectComments(state),
    list: selectListByCardId(state, state.cardDetail.id),
    menuIsOpenState: menuIsOpen(state),
  }));
  const dispatch = useDispatch();

  return (
    <CardDetail
      navigate={navigate}
      card={card}
      comments={comments}
      list={list}
      menuIsOpen={menuIsOpenState}
      updateCard={card => dispatch(updateCard(card))}
      deleteCard={id => dispatch(deleteCard(id))}
      receiveCardDetail={card => dispatch(receiveCardDetail(card))}
      resetMenus={() => dispatch(resetMenus())}
    />
  );
};

export default CardDetailContainer;
