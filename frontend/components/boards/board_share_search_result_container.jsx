import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import BoardShareSearchResult from './board_share_search_result';

import { selectBoard, checkSharedUser, selectShareId } from '../../reducers/selectors';
import { createShare, deleteShare } from '../../actions/board_share_actions';

const BoardShareSearchResultContainer = ({ user }) => {
  const { boardId } = useParams();

  const { currentUser, board, shares, alreadyShared, shareId } = useSelector((state) => {
    const board = selectBoard(state, parseInt(boardId, 10));
    const { shares } = state;

    return {
      currentUser: state.currentUser,
      board,
      shares,
      alreadyShared: checkSharedUser(shares, user),
      shareId: selectShareId(shares, user),
    };
  });
  const dispatch = useDispatch();

  return (
    <BoardShareSearchResult
      currentUser={currentUser}
      board={board}
      shares={shares}
      alreadyShared={alreadyShared}
      shareId={shareId}
      createShare={(share) => dispatch(createShare(share))}
      deleteShare={(id) => dispatch(deleteShare(id))}
      {...props}
    />
  );
};

export default BoardShareSearchResultContainer;
