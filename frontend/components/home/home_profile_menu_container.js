import { connect } from 'react-redux';

import HomeProfileMenu from './home_profile_menu';

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
)(HomeProfileMenu);
