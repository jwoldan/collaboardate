import { connect } from 'react-redux';

import CardDueDateMenu from './card_due_date_menu';

import { toggleMenu } from '../../actions/menu_status_actions';
import { updateCard } from '../../actions/card_actions';

const mapStateToProps = ({ menuStatus }) => ({
  show: menuStatus.showCardDueDateMenu,
});

const mapDispatchToProps = (dispatch) => ({
  toggle: () => dispatch(toggleMenu('showCardDueDateMenu')),
  updateCard: (card) => dispatch(updateCard(card)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardDueDateMenu);
