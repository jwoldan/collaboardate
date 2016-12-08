import { connect } from 'react-redux';

import HomeNavigation from './home_navigation';

import { toggleMenu, resetMenus } from '../../actions/menu_status_actions';

const mapStateToProps = ({ menuStatus }) => ({
  menuStatus,
});

const mapDispatchToProps = (dispatch) => ({
  toggleMenu: (menu) => dispatch(toggleMenu(menu)),
  resetMenus: () => dispatch(resetMenus()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeNavigation);
