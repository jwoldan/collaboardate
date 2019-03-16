import { connect } from 'react-redux';

import CardDueDateForm from './card_due_date_form';

import { updateCard } from '../../actions/card_actions';

const mapDispatchToProps = dispatch => ({
  updateCard: card => dispatch(updateCard(card)),
});

export default connect(
  null,
  mapDispatchToProps
)(CardDueDateForm);
