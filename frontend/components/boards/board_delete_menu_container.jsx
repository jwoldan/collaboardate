import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import BoardDeleteMenu from './board_delete_menu';

import { deleteBoard } from '../../actions/board_actions';

const BoardDeleteMenuContainer = () => {
  const navigate = useNavigate();
  const { boardId } = useParams();

  const dispatch = useDispatch();

  return (
    <BoardDeleteMenu
      navigate={navigate}
      boardId={boardId}
      deleteBoard={id => dispatch(deleteBoard(id))}
    />
  );
};

export default BoardDeleteMenuContainer;
