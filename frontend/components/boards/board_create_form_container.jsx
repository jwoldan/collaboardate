import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import BoardCreateForm from './board_create_form';

import { createBoard } from '../../actions/board_actions';
import { resetMenus } from '../../actions/menu_status_actions';

const BoardCreateFormContainer = props => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  return (
    <BoardCreateForm
      navigate={navigate}
      createBoard={board => dispatch(createBoard(board))}
      resetMenus={() => dispatch(resetMenus())}
      {...props}
    />
  );
};

export default BoardCreateFormContainer;
