import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import HomeNavigation from './home_navigation';

import { fetchBoards } from '../../actions/board_actions';

const HomeNavigationContainer = (props) => {
  const {
    currentUser,
  } = useSelector((state) => ({
    currentUser: state.currentUser,
  }));

  const dispatch = useDispatch();

  return (
    <HomeNavigation
      currentUser={currentUser}
      fetchBoards={() => dispatch(fetchBoards())}
      {...props}
    />
  );
};

export default HomeNavigationContainer;
