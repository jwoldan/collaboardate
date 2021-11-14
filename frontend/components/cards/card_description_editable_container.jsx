import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CardDescriptionEditable from './card_description_editable';

import { addMenu, removeMenu, toggleMenu } from '../../actions/menu_status_actions';

const CardDescriptionEditableContainer = (props) => {
  const { showStatus } = useSelector((state) => ({
    showStatus: (menu) => state.menuStatus[menu],
  }));
  const dispatch = useDispatch();

  return (
    <CardDescriptionEditable
      showStatus={showStatus}
      addMenu={(menu) => dispatch(addMenu(menu))}
      removeMenu={(menu) => dispatch(removeMenu(menu))}
      toggle={(menu) => dispatch(toggleMenu(menu))}
      {...props}
    />
  );
};

export default CardDescriptionEditableContainer;
