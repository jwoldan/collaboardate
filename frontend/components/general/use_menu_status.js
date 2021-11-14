import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addMenu, removeMenu, toggleMenu } from '../../actions/menu_status_actions';
import { tryStopPropagation } from '../../util/event_util';

const useMenuStatus = (menuKey, disabled = false, leaveOthers = false) => {
  const show = useSelector(({ menuStatus }) => menuStatus[menuKey]);
  const dispatch = useDispatch();
  const add = React.useCallback(() => dispatch(addMenu(menuKey)), [dispatch, addMenu, menuKey]);
  const remove = React.useCallback(
    () => dispatch(removeMenu(menuKey)),
    [dispatch, removeMenu, menuKey]
  );
  const toggle = React.useCallback(
    (e) => {
      tryStopPropagation(e);
      if (disabled) return;

      dispatch(toggleMenu(menuKey, leaveOthers));
    },
    [dispatch, toggleMenu, tryStopPropagation, menuKey, disabled, leaveOthers]
  );

  const menuKeyRef = React.useRef(null);
  React.useEffect(() => {
    if (menuKeyRef.current) remove(menuKeyRef.current);
    add(menuKey);
    menuKeyRef.current = menuKey;

    return () => remove(menuKey);
  }, [add, remove, menuKey]);

  return [show, toggle];
};

export default useMenuStatus;
