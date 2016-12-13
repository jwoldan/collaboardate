import { connect } from 'react-redux';

import CardDetail from './card_detail';

import { selectListByCardId, menuIsOpen } from '../../reducers/selectors';
import { updateCard, deleteCard } from '../../actions/card_actions';
import { receiveCardDetail } from '../../actions/card_detail_actions';
import { resetMenus } from '../../actions/menu_status_actions';


const mapStateToProps = (state) => ({
  card: state.cardDetail,
  list: selectListByCardId(state, state.cardDetail.id),
  menuIsOpen: menuIsOpen(state),
});

const mapDispatchToProps = (dispatch) => ({
  updateCard: (card) => dispatch(updateCard(card)),
  deleteCard: (id) => dispatch(deleteCard(id)),
  receiveCardDetail: (card) => dispatch(receiveCardDetail(card)),
  resetMenus: () => dispatch(resetMenus()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardDetail);
