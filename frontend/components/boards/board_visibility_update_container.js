import { connect } from 'react-redux';

import BoardVisibilityUpdate from './board_visibility_update';

import { updateBoard } from '../../actions/board_actions';

const mapDispatchToProps = dispatch => ({
  updateBoard: board => dispatch(updateBoard(board)),
});

export default connect(
  null,
  mapDispatchToProps
)(BoardVisibilityUpdate);
