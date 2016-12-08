import { connect } from 'react-redux';

import BoardsIndex from './boards_index';

import { selectPersonalBoards } from '../../reducers/selectors.js';
import { fetchBoards } from '../../actions/board_actions';

const mapStateToProps = (state) => ({
  boards: selectPersonalBoards(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchBoards: () => dispatch(fetchBoards()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardsIndex);
