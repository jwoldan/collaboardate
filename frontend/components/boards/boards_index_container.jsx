import React from 'react';
import { useSelector } from 'react-redux';

import BoardsIndex from './boards_index';

import { selectPersonalBoards, selectSharedBoards } from '../../reducers/selectors';

const BoardsIndexContainer = (props) => {
  const { personalBoards, sharedBoards } = useSelector((state) => ({
    personalBoards: selectPersonalBoards(state),
    sharedBoards: selectSharedBoards(state),
  }));

  return <BoardsIndex personalBoards={personalBoards} sharedBoards={sharedBoards} {...props} />;
};

export default BoardsIndexContainer;
