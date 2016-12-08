import { connect } from 'react-redux';

import HomeBoardsMenu from './home_boards_menu';

import { selectPersonalBoards } from '../../reducers/selectors.js';

const mapStateToProps = (state) => ({
  boards: selectPersonalBoards(state),
});

export default connect(
  mapStateToProps
)(HomeBoardsMenu);
