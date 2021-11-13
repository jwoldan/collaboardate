import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import ListCreateForm from './list_create_form';

import { selectBoard } from '../../reducers/selectors.js';
import { createList } from '../../actions/list_actions';

const ListCreateFormContainer = () => {
  const { boardId } = useParams();

  const { board } = useSelector(state => {
    if (boardId) {
      return {
        board: selectBoard(state, parseInt(boardId)),
      };
    } else {
      return { board: {} };
    }
  });
  const dispatch = useDispatch();

  return <ListCreateForm board={board} createList={list => dispatch(createList(list))} />;
};

export default ListCreateFormContainer;
