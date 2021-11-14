import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';

import HomeProfileMenu from './home_profile_menu';

import { logout } from '../../actions/user_actions';

const HomeProfileMenuContainer = (props) => {
  const navigate = useNavigate();
  const location = useLocation();

  const { currentUser } = useSelector((state) => ({
    currentUser: state.currentUser,
  }));
  const dispatch = useDispatch();

  return (
    <HomeProfileMenu
      navigate={navigate}
      location={location}
      currentUser={currentUser}
      logout={() => dispatch(logout())}
      {...props}
    />
  );
};

export default HomeProfileMenuContainer;
