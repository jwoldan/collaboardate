import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import Profile from './profile';

import { selectProfile } from '../../reducers/selectors';
import { fetchProfile, receiveProfile, updateUser }
  from '../../actions/user_actions';
import { receiveProfileErrors } from '../../actions/errors_actions';


const mapStateToProps = (state, ownProps) => {
  const profile = selectProfile(state, ownProps.params.username);
  return {
    currentUser: state.currentUser,
    profile,
    editable: profile.id === state.currentUser.id,
    errors: state.errors.profile,
  };
};

const mapDispatchToProps = (dispatch) => ({
  clearProfile: () => dispatch(receiveProfile({})),
  fetchProfile: (username) => dispatch(fetchProfile(username)),
  updateUser: (user) => dispatch(updateUser(user)),
  clearProfileErrors: () => dispatch(receiveProfileErrors({})),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Profile)
);
