import { connect } from 'react-redux';

import Board from './board';

import { fetchCurrentBoard, updateCurrentBoard } from '../../actions/board_actions';

const mapStateToProps = ({ currentBoard }, ownProps) => ({
  currentBoard,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrentBoard: (id) => dispatch(fetchCurrentBoard(id)),
  updateCurrentBoard: (board) => dispatch(updateCurrentBoard(board)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);
