import { connect } from 'react-redux';

import BoardShareMenu from './board_share_menu';

import { toggleMenu } from '../../actions/menu_status_actions';
// import { createShare } from '../../actions/shared_board_actions';

const mapStateToProps = ({ menuStatus }) => ({
  show: menuStatus.showBoardShareMenu,
});

const mapDispatchToProps = (dispatch) => ({
  toggle: () => dispatch(toggleMenu('showBoardShareMenu', true)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardShareMenu);
