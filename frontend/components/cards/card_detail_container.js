import { connect } from 'react-redux';

import CardDetail from './card_detail';

import { selectListByCardId } from '../../reducers/selectors';
import { receiveCardDetail } from '../../actions/card_detail_actions';

const mapStateToProps = (state) => ({
  card: state.cardDetail,
  list: selectListByCardId(state, state.cardDetail.id),
});

const mapDispatchToProps = (dispatch) => ({
  receiveCardDetail: (card) => dispatch(receiveCardDetail(card)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardDetail);
