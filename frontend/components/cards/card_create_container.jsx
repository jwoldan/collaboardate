import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CardCreate from './card_create';

import { addMenu, removeMenu, toggleMenu } from '../../actions/menu_status_actions';
import { createCard } from '../../actions/card_actions';

const CardCreateContainer = (props) => {
  const { showStatus } = useSelector((state) => ({
    showStatus: (menu) => state.menuStatus[menu],
  }));
  const dispatch = useDispatch();

  return (
    <CardCreate
      showStatus={showStatus}
      addMenu={(menu) => dispatch(addMenu(menu))}
      removeMenu={(menu) => dispatch(removeMenu(menu))}
      toggle={(menu) => dispatch(toggleMenu(menu))}
      createCard={(card) => dispatch(createCard(card))}
      {...props}
    />
  );
};

export default CardCreateContainer;
