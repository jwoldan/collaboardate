import React from 'react';
import { useDispatch } from 'react-redux';

import BoardTitleMenuContent from './board_title_menu_content';

import { updateBoard } from '../../actions/board_actions';

const BoardTitleMenuContentContainer = (props) => {
  const dispatch = useDispatch();

  return (
    <BoardTitleMenuContent
      updateBoard={(board) => dispatch(updateBoard(board))}
      {...props}
    />
  );
};

export default BoardTitleMenuContentContainer;
