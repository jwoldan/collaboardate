import { connect } from 'react-redux';

import ListDeleteMenu from './list_delete_menu';

import {
  addMenu,
  removeMenu,
  toggleMenu
} from '../../actions/menu_status_actions';
import { deleteList } from '../../actions/list_actions';

const mapStateToProps = ({ menuStatus }) => ({
   showStatus: (menu) => menuStatus[menu],
});

const mapDispatchToProps = (dispatch) => ({
  addMenu: (menu) => dispatch(addMenu(menu)),
  removeMenu: (menu) => dispatch(removeMenu(menu)),
  toggle: (menu) => dispatch(toggleMenu(menu, true)),
  deleteList: (id) => dispatch(deleteList(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListDeleteMenu);
