import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import Profile from './profile';

import { fetchProfile, receiveProfile, updateUser }
  from '../../actions/user_actions';
import { selectProfile } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.currentUser,
  profile: selectProfile(state, ownProps.params.username),
});

const mapDispatchToProps = (dispatch) => ({
  clearProfile: () => dispatch(receiveProfile({})),
  fetchProfile: (username) => dispatch(fetchProfile(username)),
  updateUser: (user) => dispatch(updateUser(user)),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Profile)
);
