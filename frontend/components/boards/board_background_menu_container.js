import React from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import BoardBackgroundMenu from './board_background_menu';

import { updateBoard } from '../../actions/board_actions';

const BoardBackgroundMenuContainer = () => {
  const { boardId } = useParams();

  const dispatch = useDispatch();

  return (
    <BoardBackgroundMenu boardId={boardId} updateBoard={board => dispatch(updateBoard(board))} />
  );
};

export default BoardBackgroundMenuContainer;
