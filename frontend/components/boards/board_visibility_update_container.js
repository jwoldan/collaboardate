import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import BoardVisibilityUpdate from './board_visibility_update';

import { updateBoard } from '../../actions/board_actions';

const mapDispatchToProps = dispatch => ({
  updateBoard: board => dispatch(updateBoard(board)),
});

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(BoardVisibilityUpdate)
);
