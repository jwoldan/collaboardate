import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import Board from './board';

import { selectBoard, checkDisabled } from '../../reducers/selectors';
import { fetchBoard, updateBoard } from '../../actions/board_actions';
import { fetchShares, receiveShares } from '../../actions/board_share_actions';
import { receiveCurrentBoardId } from '../../actions/current_board_id_actions';
import { fetchCardDetail } from '../../actions/card_detail_actions';

const BoardContainer = () => {
  const history = useHistory();
  const { boardId, cardId } = useParams();

  const { currentUser, disabled, board, currentBoardId, cardDetail } = useSelector(state => {
    const board = selectBoard(state, parseInt(boardId), parseInt(cardId));

    return {
      currentUser: state.currentUser,
      disabled: checkDisabled(board, state.currentUser),
      board,
      currentBoardId: state.currentBoardId,
      cardDetail: state.cardDetail,
    };
  });
  const dispatch = useDispatch();

  return (
    <Board
      history={history}
      boardId={parseInt(boardId) || null}
      cardId={parseInt(cardId) || null}
      currentUser={currentUser}
      disabled={disabled}
      board={board}
      currentBoardId={currentBoardId}
      cardDetail={cardDetail}
      fetchBoard={board => dispatch(fetchBoard(board))}
      updateBoard={board => dispatch(updateBoard(board))}
      fetchCardDetail={cardId => dispatch(fetchCardDetail(cardId))}
      receiveCurrentBoardId={boardId => dispatch(receiveCurrentBoardId(boardId))}
      fetchShares={boardId => dispatch(fetchShares(boardId))}
      receiveShares={shares => dispatch(receiveShares(shares))}
    />
  );
};

export default BoardContainer;
