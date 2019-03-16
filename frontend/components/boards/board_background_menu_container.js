import { connect } from 'react-redux';

import BoardBackgroundMenu from './board_background_menu';

import { updateBoard } from '../../actions/board_actions';

const mapDispatchToProps = dispatch => ({
  updateBoard: board => dispatch(updateBoard(board)),
});

export default connect(
  null,
  mapDispatchToProps
)(BoardBackgroundMenu);
