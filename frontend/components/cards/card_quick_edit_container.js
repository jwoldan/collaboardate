import { connect } from 'react-redux';

import CardQuickEdit from './card_quick_edit';

import { addMenu, removeMenu, toggleMenu }
  from '../../actions/menu_status_actions';
  import { updateCard, deleteCard } from '../../actions/card_actions';

const mapStateToProps = ({ menuStatus }) => ({
  showStatus: (menu) => menuStatus[menu],
});

const mapDispatchToProps = (dispatch) => ({
  addMenu: (menu) => dispatch(addMenu(menu)),
  removeMenu: (menu) => dispatch(removeMenu(menu)),
  toggle: (menu) => dispatch(toggleMenu(menu)),
  updateCard: (card) => dispatch(updateCard(card)),
  deleteCard: (id) => dispatch(deleteCard(id)),
});

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(CardQuickEdit);
