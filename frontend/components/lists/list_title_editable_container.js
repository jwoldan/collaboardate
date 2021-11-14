import { connect } from 'react-redux';

import ListTitleEditable from './list_title_editable';

import { addMenu, removeMenu, toggleMenu } from '../../actions/menu_status_actions';
import { updateList } from '../../actions/list_actions';

const mapStateToProps = ({ menuStatus }) => ({
  showStatus: (menu) => menuStatus[menu],
});

const mapDispatchToProps = (dispatch) => ({
  addMenu: (menu) => dispatch(addMenu(menu)),
  removeMenu: (menu) => dispatch(removeMenu(menu)),
  toggle: (menu) => dispatch(toggleMenu(menu)),
  updateList: (list) => dispatch(updateList(list)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListTitleEditable);
