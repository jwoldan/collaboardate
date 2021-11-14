import React from 'react';
import { useDispatch } from 'react-redux';

import BoardVisibilityUpdate from './board_visibility_update';

import { updateBoard } from '../../actions/board_actions';

const BoardVisibilityUpdateContainer = (props) => {
  const dispatch = useDispatch();

  return <BoardVisibilityUpdate updateBoard={(board) => dispatch(updateBoard(board))} {...props} />;
};

export default BoardVisibilityUpdateContainer;
