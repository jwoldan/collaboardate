import { connect } from 'react-redux';

import CardCreate from './card_create';

import { addMenu, removeMenu, toggleMenu }
  from '../../actions/menu_status_actions';
  import { createCard } from '../../actions/card_actions';

const mapStateToProps = ({ menuStatus }) => ({
  showStatus: (menu) => menuStatus[menu],
});

const mapDispatchToProps = (dispatch) => ({
  addMenu: (menu) => dispatch(addMenu(menu)),
  removeMenu: (menu) => dispatch(removeMenu(menu)),
  toggle: (menu) => dispatch(toggleMenu(menu)),
  createCard: (card) => dispatch(createCard(card)),
});

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(CardCreate);
