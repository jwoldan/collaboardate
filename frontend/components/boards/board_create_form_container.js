import { connect } from 'react-redux';

import BoardCreateForm from './board_create_form';

import { createBoard } from '../../actions/board_actions';

const mapDispatchToProps = (dispatch) => ({
  createBoard: (board) => dispatch(createBoard(board)),
});

export default connect(
  null,
  mapDispatchToProps
)(BoardCreateForm);
