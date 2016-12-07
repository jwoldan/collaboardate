import { connect } from 'react-redux';

import Home from './home';

import { logout } from '../../actions/current_user_actions';

const mapStateToProps = ({ currentUser }) => ({
  currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
