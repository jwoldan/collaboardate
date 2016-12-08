import { connect } from 'react-redux';

import Board from './board';

import { fetchBoard } from '../../actions/board_actions';

const mapStateToProps = ({ currentBoard }, ownProps) => ({
  currentBoard,
});

const mapDispatchToProps = (dispatch) => ({
  fetchBoard: (id) => dispatch(fetchBoard(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);
