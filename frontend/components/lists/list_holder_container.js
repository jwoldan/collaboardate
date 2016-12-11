import { connect } from 'react-redux';

import ListHolder from './list_holder';

import { receiveList, updateList } from '../../actions/list_actions';

const mapDispatchToProps = (dispatch) => ({
  receiveList: (list) => dispatch(receiveList(list)),
  updateList: (list) => dispatch(updateList(list)),
});

export default connect(
  null,
  mapDispatchToProps
)(ListHolder);
