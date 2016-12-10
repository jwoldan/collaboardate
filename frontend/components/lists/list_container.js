import { connect } from 'react-redux';

import List from './list';

import { updateListOrd } from '../../actions/list_actions';

const mapDispatchToProps = (dispatch) => ({
  updateListOrd: (list) => dispatch(updateListOrd(list)),
});

export default connect(
  null,
  mapDispatchToProps
)(List);
