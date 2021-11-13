import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import App from './app';

import { menuIsOpen } from '../reducers/selectors';
import { resetMenus } from '../actions/menu_status_actions';

const AppContainer = () => {
  const location = useLocation();

  const { currentUser, menuIsOpenState } = useSelector(state => ({
    currentUser: state.currentUser,
    menuIsOpenState: menuIsOpen(state),
  }));
  const dispatch = useDispatch();

  return (
    <App
      location={location}
      currentUser={currentUser}
      menuIsOpen={menuIsOpenState}
      resetMenus={() => dispatch(resetMenus())}
    />
  );
};

export default AppContainer;
