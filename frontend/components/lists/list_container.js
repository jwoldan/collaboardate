import { connect } from 'react-redux';

import List from './list';

import { updateList } from '../../actions/list_actions';

const mapDispatchToProps = dispatch => ({
  updateList: list => dispatch(updateList(list)),
});

export default connect(
  null,
  mapDispatchToProps
)(List);
