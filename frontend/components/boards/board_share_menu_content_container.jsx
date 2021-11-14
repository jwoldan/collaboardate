import React from 'react';
import { useSelector } from 'react-redux';

import BoardShareMenuContent from './board_share_menu_content';

import { search } from '../../util/user_api_util';

const BoardShareMenuContentContainer = (props) => {
  const {
    search
  } = useSelector(() => ({
    search,
  }));

  return (
    <BoardShareMenuContent
      search={search}
      {...props}
    />
  );
};

export default BoardShareMenuContentContainer;
