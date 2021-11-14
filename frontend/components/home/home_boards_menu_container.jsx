import React from 'react';
import { useSelector } from 'react-redux';

import HomeBoardsMenu from './home_boards_menu';

import { selectPersonalBoards, selectSharedBoards } from '../../reducers/selectors';

const HomeBoardsMenuContainer = (props) => {
  const { currentUser, personalBoards, sharedBoards } = useSelector((state) => ({
    currentUser: state.currentUser,
    personalBoards: selectPersonalBoards(state),
    sharedBoards: selectSharedBoards(state),
  }));

  return (
    <HomeBoardsMenu
      currentUser={currentUser}
      personalBoards={personalBoards}
      sharedBoards={sharedBoards}
      {...props}
    />
  );
};

export default HomeBoardsMenuContainer;
