import React from 'react';
import { useDispatch } from 'react-redux';

import List from './list';

import { updateList } from '../../actions/list_actions';

const ListContainer = (props) => {
  const dispatch = useDispatch();

  return <List updateList={(list) => dispatch(updateList(list))} {...props} />;
};

export default ListContainer;
