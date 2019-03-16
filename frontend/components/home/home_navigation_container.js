import { connect } from 'react-redux';

import HomeNavigation from './home_navigation';

import { fetchBoards } from '../../actions/board_actions';

const mapStateToProps = ({ currentUser }) => ({
  currentUser,
});

const mapDispatchToProps = dispatch => ({
  fetchBoards: () => dispatch(fetchBoards()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeNavigation);
