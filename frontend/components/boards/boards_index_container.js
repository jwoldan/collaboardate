import { connect } from 'react-redux';

import BoardsIndex from './boards_index';

import { selectPersonalBoards } from '../../reducers/selectors.js';

const mapStateToProps = (state) => ({
  boards: selectPersonalBoards(state),
});

export default connect(
  mapStateToProps
)(BoardsIndex);
