import React from 'react';
import { useSelector } from 'react-redux';

import Home from './home';

import { selectBoard } from '../../reducers/selectors';

const HomeContainer = (props) => {
  const { board } = useSelector((state) => ({
    board: selectBoard(state, state.currentBoardId),
  }));

  return <Home board={board} {...props} />;
};

export default HomeContainer;
