import { connect } from 'react-redux';

import HomeBoardsMenu from './home_boards_menu';

import { selectPersonalBoards, selectSharedBoards } from '../../reducers/selectors';

const mapStateToProps = state => ({
  currentUser: state.currentUser,
  personalBoards: selectPersonalBoards(state),
  sharedBoards: selectSharedBoards(state),
});

export default connect(mapStateToProps)(HomeBoardsMenu);
