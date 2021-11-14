import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CardQuickEdit from './card_quick_edit';

import { addMenu, removeMenu, toggleMenu } from '../../actions/menu_status_actions';
import { updateCard, deleteCard } from '../../actions/card_actions';

const CardQuickEditContainer = (props) => {
  const {
    showStatus,
  } = useSelector((state) => ({
    showStatus: (menu) => state.menuStatus[menu],
  }));
  const dispatch = useDispatch();

  return (
    <CardQuickEdit
      showStatus={showStatus}
      addMenu={(menu) => dispatch(addMenu(menu))}
      removeMenu={(menu) => dispatch(removeMenu(menu))}
      toggle={(menu) => dispatch(toggleMenu(menu))}
      toggleModal={() => dispatch(toggleMenu('showCardEditModal', true))}
      updateCard={(card) => dispatch(updateCard(card))}
      deleteCard={(id) => dispatch(deleteCard(id))}
      {...props}
    />
  );
};

export default CardQuickEditContainer;
