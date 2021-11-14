import React from 'react';
import { useSelector } from 'react-redux';
import BoardMenu from './board_menu';

import { checkSharedUser } from '../../reducers/selectors';

const BoardMenuContainer = (props) => {
  const { shared } = useSelector((state) => ({
    shared: checkSharedUser(state.shares, state.currentUser),
  }));

  return <BoardMenu shared={shared} {...props} />;
};

export default BoardMenuContainer;
