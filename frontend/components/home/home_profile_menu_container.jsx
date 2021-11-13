import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';

import HomeProfileMenu from './home_profile_menu';

import { logout } from '../../actions/user_actions';

const HomeProfileMenuContainer = () => {
  const history = useHistory();
  const location = useLocation();

  const { currentUser } = useSelector(state => ({
    currentUser: state.currentUser,
  }));
  const dispatch = useDispatch();

  return (
    <HomeProfileMenu
      history={history}
      location={location}
      currentUser={currentUser}
      logout={() => dispatch(logout())}
    />
  );
};

export default HomeProfileMenuContainer;
