import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import BoardMembers from './board_members';

import { selectBoardUsers } from '../../reducers/selectors';

const BoardMembersContainer = (props) => {
  const { boardId } = useParams();

  const { users } = useSelector((state) => ({
    users: selectBoardUsers(state, parseInt(boardId, 10)),
  }));

  return <BoardMembers users={users} {...props} />;
};

export default BoardMembersContainer;
