import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import BoardDeleteMenu from './board_delete_menu';

import { deleteBoard } from '../../actions/board_actions';

const BoardDeleteMenuContainer = () => {
  const history = useHistory();
  const { boardId } = useParams();

  const dispatch = useDispatch();

  return (
    <BoardDeleteMenu
      history={history}
      boardId={boardId}
      deleteBoard={id => dispatch(deleteBoard(id))}
    />
  );
};

export default BoardDeleteMenuContainer;
