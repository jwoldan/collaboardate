import { connect } from 'react-redux';

import Card from './card';

import { receiveCardDetail } from '../../actions/card_detail_actions';

const mapDispatchToProps = dispatch => ({
  receiveCardDetail: card => dispatch(receiveCardDetail(card)),
});

export default connect(
  null,
  mapDispatchToProps
)(Card);
