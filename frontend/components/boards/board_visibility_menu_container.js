import { connect } from 'react-redux';

import BoardVisibilityMenu from './board_visibility_menu';

import { toggleMenu } from '../../actions/menu_status_actions';

const mapStateToProps = ({ menuStatus }) => ({
  show: menuStatus.showBoardVisibilityMenu,
});

const mapDispatchToProps = dispatch => ({
  toggle: () => dispatch(toggleMenu('showBoardVisibilityMenu')),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardVisibilityMenu);
