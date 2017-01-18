import { connect } from 'react-redux';

import Board from './board';

import { selectBoard, selectLists, checkDisabled }
  from '../../reducers/selectors';
import { fetchBoard, updateBoard } from '../../actions/board_actions';
import { fetchLists, receiveLists } from '../../actions/list_actions';
import { fetchCards, receiveCards } from '../../actions/card_actions';
import { fetchShares, receiveShares } from '../../actions/board_share_actions';
import { receiveCurrentBoardId } from '../../actions/current_board_id_actions';
import { fetchCardDetail } from '../../actions/card_detail_actions';


const mapStateToProps = (state, ownProps) => {
  const board = selectBoard(
    state,
    parseInt(ownProps.params.boardId),
    parseInt(ownProps.params.cardId)
  );

  return {
    currentUser: state.currentUser,
    disabled: checkDisabled(board, state.currentUser),
    board,
    lists: selectLists(state, ownProps.params.boardId),
    currentBoardId: state.currentBoardId,
    cardDetail: state.cardDetail,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchBoard: (board) => dispatch(fetchBoard(board)),
  updateBoard: (board) => dispatch(updateBoard(board)),
  fetchLists: (boardId) => dispatch(fetchLists(boardId)),
  receiveLists: (lists) => dispatch(receiveLists(lists)),
  fetchCardDetail: (cardId) => dispatch(fetchCardDetail(cardId)),
  fetchCards: (boardId) => dispatch(fetchCards(boardId)),
  receiveCurrentBoardId: (boardId) => dispatch(receiveCurrentBoardId(boardId)),
  receiveCards: (cards) => dispatch(receiveCards(cards)),
  fetchShares: (boardId) => dispatch(fetchShares(boardId)),
  receiveShares: (shares) => dispatch(receiveShares(shares)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);
