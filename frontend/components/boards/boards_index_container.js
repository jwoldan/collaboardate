import { connect } from 'react-redux';

import BoardsIndex from './boards_index';

import { selectPersonalBoards, selectSharedBoards } from '../../reducers/selectors';

const mapStateToProps = state => ({
  personalBoards: selectPersonalBoards(state),
  sharedBoards: selectSharedBoards(state),
});

export default connect(mapStateToProps)(BoardsIndex);
