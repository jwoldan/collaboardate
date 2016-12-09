import { connect } from 'react-redux';

import Board from './board';

import { fetchBoard, updateBoard } from '../../actions/board_actions';
import { selectBoard } from '../../reducers/selectors.js';

const mapStateToProps = (state, ownProps) => ({
  board: selectBoard(state, ownProps.params.boardId),
});

const mapDispatchToProps = (dispatch) => ({
  updateBoard: (board) => dispatch(updateBoard(board)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);
