import { connect } from 'react-redux';

import Board from './board';

import { selectBoard, checkDisabled } from '../../reducers/selectors';
import { fetchBoard, updateBoard } from '../../actions/board_actions';
import { fetchShares, receiveShares } from '../../actions/board_share_actions';
import { receiveCurrentBoardId } from '../../actions/current_board_id_actions';
import { fetchCardDetail } from '../../actions/card_detail_actions';

const mapStateToProps = (state, ownProps) => {
  const { params } = ownProps.match;
  const board = selectBoard(state, parseInt(params.boardId), parseInt(params.cardId));

  return {
    currentUser: state.currentUser,
    disabled: checkDisabled(board, state.currentUser),
    board,
    currentBoardId: state.currentBoardId,
    cardDetail: state.cardDetail,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchBoard: board => dispatch(fetchBoard(board)),
  updateBoard: board => dispatch(updateBoard(board)),
  fetchCardDetail: cardId => dispatch(fetchCardDetail(cardId)),
  receiveCurrentBoardId: boardId => dispatch(receiveCurrentBoardId(boardId)),
  fetchShares: boardId => dispatch(fetchShares(boardId)),
  receiveShares: shares => dispatch(receiveShares(shares)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);
