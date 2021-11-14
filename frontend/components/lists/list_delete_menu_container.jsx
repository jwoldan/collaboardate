import React from 'react';
import { useDispatch } from 'react-redux';

import ListDeleteMenu from './list_delete_menu';

import { deleteList } from '../../actions/list_actions';

const ListDeleteMenuContainer = (props) => {
  const dispatch = useDispatch();

  return <ListDeleteMenu deleteList={(id) => dispatch(deleteList(id))} {...props} />;
};

export default ListDeleteMenuContainer;
