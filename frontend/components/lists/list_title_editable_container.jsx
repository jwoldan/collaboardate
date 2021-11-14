import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ListTitleEditable from './list_title_editable';

import { addMenu, removeMenu, toggleMenu } from '../../actions/menu_status_actions';
import { updateList } from '../../actions/list_actions';

const ListTitleEditableContainer = (props) => {
  const {
    showStatus,
  } = useSelector((state) => ({
    showStatus: (menu) => state.menuStatus[menu],
  }));
  const dispatch = useDispatch();

  return (
    <ListTitleEditable
      showStatus={showStatus}
      addMenu={(menu) => dispatch(addMenu(menu))}
      removeMenu={(menu) => dispatch(removeMenu(menu))}
      toggle={(menu) => dispatch(toggleMenu(menu))}
      updateList={(list) => dispatch(updateList(list))}
      {...props}
    />
  );
};

export default ListTitleEditableContainer;
