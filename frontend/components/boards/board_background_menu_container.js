import { connect } from 'react-redux';

import BoardBackgroundMenu from './board_background_menu';

import { toggleMenu } from '../../actions/menu_status_actions';
import { updateBoard } from '../../actions/board_actions';

const mapStateToProps = ({ menuStatus }) => ({
  show: menuStatus.showBoardBackgroundMenu,
});

const mapDispatchToProps = dispatch => ({
  toggle: () => dispatch(toggleMenu('showBoardBackgroundMenu', true)),
  updateBoard: id => dispatch(updateBoard(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardBackgroundMenu);
