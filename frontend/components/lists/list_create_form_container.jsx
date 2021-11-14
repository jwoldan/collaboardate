import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import ListCreateForm from './list_create_form';

import { selectBoard } from '../../reducers/selectors';
import { createList } from '../../actions/list_actions';

const ListCreateFormContainer = (props) => {
  const { boardId } = useParams();

  const { board } = useSelector((state) => {
    if (boardId) {
      return {
        board: selectBoard(state, parseInt(boardId, 10)),
      };
    }
    return { board: {} };
  });
  const dispatch = useDispatch();

  return (
    <ListCreateForm board={board} createList={(list) => dispatch(createList(list))} {...props} />
  );
};

export default ListCreateFormContainer;
