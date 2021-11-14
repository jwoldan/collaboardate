import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CardTitleEditable from './card_title_editable';

import { addMenu, removeMenu, toggleMenu } from '../../actions/menu_status_actions';

const CardTitleEditableContainer = (props) => {
  const {
    showStatus,
  } = useSelector((state) => ({
    showStatus: (menu) => state.menuStatus[menu],
  }));
  const dispatch = useDispatch();

  return (
    <CardTitleEditable
      showStatus={showStatus}
      addMenu={(menu) => dispatch(addMenu(menu))}
      removeMenu={(menu) => dispatch(removeMenu(menu))}
      toggle={(menu) => dispatch(toggleMenu(menu))}
      {...props}
    />
  );
};

export default CardTitleEditableContainer;
