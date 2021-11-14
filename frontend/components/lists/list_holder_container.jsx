import React from 'react';
import { useDispatch } from 'react-redux';

import ListHolder from './list_holder';

import { receiveList, updateList } from '../../actions/list_actions';

const ListHolderContainer = (props) => {
  const dispatch = useDispatch();

  return (
    <ListHolder
      receiveList={(list) => dispatch(receiveList(list))}
      updateList={(list) => dispatch(updateList(list))}
      {...props}
    />
  );
};

export default ListHolderContainer;
