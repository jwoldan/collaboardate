import { connect } from 'react-redux';

import Board from './board';

import { receiveCurrentBoardId } from '../../actions/current_board_id_actions';
import { fetchBoard, updateBoard } from '../../actions/board_actions';
import { selectBoard } from '../../reducers/selectors.js';

const mapStateToProps = (state) => ({
  board: selectBoard(state, state.currentBoardId),
});

const mapDispatchToProps = (dispatch) => ({
  receiveCurrentBoardId: (id) => dispatch(receiveCurrentBoardId(id)),
  updateBoard: (board) => dispatch(updateBoard(board)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);
