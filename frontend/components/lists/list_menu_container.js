import { connect } from 'react-redux';

import ListMenu from './list_menu';

import {
  addMenu,
  removeMenu,
  toggleMenu
} from '../../actions/menu_status_actions';

const mapStateToProps = ({ menuStatus }) => ({
  showStatus: (menu) => menuStatus[menu],
});

const mapDispatchToProps = (dispatch) => ({
  addMenu: (menu) => dispatch(addMenu(menu)),
  removeMenu: (menu) => dispatch(removeMenu(menu)),
  toggle: (menu) => dispatch(toggleMenu(menu)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListMenu);
