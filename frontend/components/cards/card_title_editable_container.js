import { connect } from 'react-redux';

import CardTitleEditable from './card_title_editable';

import { addMenu, removeMenu, toggleMenu } from '../../actions/menu_status_actions';

const mapStateToProps = ({ menuStatus }) => ({
  showStatus: menu => menuStatus[menu],
});

const mapDispatchToProps = dispatch => ({
  addMenu: menu => dispatch(addMenu(menu)),
  removeMenu: menu => dispatch(removeMenu(menu)),
  toggle: menu => dispatch(toggleMenu(menu)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardTitleEditable);
