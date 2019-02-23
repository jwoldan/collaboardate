import { connect } from 'react-redux';

import List from './list';

import { selectCards } from '../../reducers/selectors';
import { updateList } from '../../actions/list_actions';

const mapStateToProps = (state, { list }) => ({
  cards: selectCards(state, list.id),
});

const mapDispatchToProps = dispatch => ({
  updateList: list => dispatch(updateList(list)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
