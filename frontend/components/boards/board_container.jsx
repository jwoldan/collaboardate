import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import Board from './board';

import { selectBoard, checkDisabled } from '../../reducers/selectors';
import { fetchBoard, updateBoard } from '../../actions/board_actions';
import { fetchShares, receiveShares } from '../../actions/board_share_actions';
import { receiveCurrentBoardId } from '../../actions/current_board_id_actions';
import { fetchCardDetail } from '../../actions/card_detail_actions';

const BoardContainer = (props) => {
  const navigate = useNavigate();
  const { boardId, cardId } = useParams();

  const { currentUser, disabled, board, currentBoardId, cardDetail } = useSelector((state) => {
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
      navigate={navigate}
      boardId={parseInt(boardId, 10) || null}
      cardId={parseInt(cardId, 10) || null}
      currentUser={currentUser}
      disabled={disabled}
      board={board}
      currentBoardId={currentBoardId}
      cardDetail={cardDetail}
      fetchBoard={(boardId) => dispatch(fetchBoard(boardId))}
      updateBoard={(boardUpdates) => dispatch(updateBoard(boardUpdates))}
      fetchCardDetail={(cardId) => dispatch(fetchCardDetail(cardId))}
      receiveCurrentBoardId={(boardId) => dispatch(receiveCurrentBoardId(boardId))}
      fetchShares={(boardId) => dispatch(fetchShares(boardId))}
      receiveShares={(shares) => dispatch(receiveShares(shares))}
      {...props}
    />
  );
};

export default BoardContainer;
