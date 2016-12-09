import { connect } from 'react-redux';

import HomeNavigation from './home_navigation';

import { fetchBoards } from '../../actions/board_actions';
import { toggleMenu, resetMenus } from '../../actions/menu_status_actions';

const mapStateToProps = ({ currentUser, menuStatus }) => ({
  currentUser,
  menuStatus,
});

const mapDispatchToProps = (dispatch) => ({
  fetchBoards: () => dispatch(fetchBoards()),
  toggleMenu: (menu) => dispatch(toggleMenu(menu)),
  resetMenus: () => dispatch(resetMenus()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeNavigation);
