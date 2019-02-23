import { connect } from 'react-redux';

import BoardCreateForm from './board_create_form';

import { createBoard } from '../../actions/board_actions';
import { resetMenus } from '../../actions/menu_status_actions';

const mapDispatchToProps = dispatch => ({
  createBoard: board => dispatch(createBoard(board)),
  resetMenus: () => dispatch(resetMenus()),
});

export default connect(
  null,
  mapDispatchToProps
)(BoardCreateForm);
