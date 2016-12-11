import { connect } from 'react-redux';

import Board from './board';

import { selectBoard, selectLists } from '../../reducers/selectors.js';
import { fetchBoard, updateBoard } from '../../actions/board_actions';
import { fetchLists, receiveLists } from '../../actions/list_actions';


const mapStateToProps = (state, ownProps) => ({
  currentUser: state.currentUser,
  board: selectBoard(state, ownProps.params.boardId),
  lists: selectLists(state, ownProps.params.boardId),
});

const mapDispatchToProps = (dispatch) => ({
  fetchBoard: (board) => dispatch(fetchBoard(board)),
  updateBoard: (board) => dispatch(updateBoard(board)),
  fetchLists: (boardId) => dispatch(fetchLists(boardId)),
  receiveLists: (lists) => dispatch(receiveLists(lists)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);
