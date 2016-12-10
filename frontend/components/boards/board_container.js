import { connect } from 'react-redux';

import Board from './board';

import { fetchBoard, updateBoard } from '../../actions/board_actions';
import { selectBoard } from '../../reducers/selectors.js';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.currentUser,
  board: selectBoard(state, ownProps.params.boardId),
});

const mapDispatchToProps = (dispatch) => ({
  fetchBoard: (board) => dispatch(fetchBoard(board)),
  updateBoard: (board) => dispatch(updateBoard(board)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);
