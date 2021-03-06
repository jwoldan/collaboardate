import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Profile from './profile';

import { selectProfile } from '../../reducers/selectors';
import {
  fetchProfile,
  receiveProfile,
  updateUser,
  updateUserAvatar,
  removeUserAvatar,
} from '../../actions/user_actions';
import { receiveProfileErrors } from '../../actions/errors_actions';

const mapStateToProps = (state, ownProps) => {
  const { params } = ownProps.match;
  const profile = selectProfile(state, params.username);

  return {
    currentUser: state.currentUser,
    profile,
    editable: profile.id === state.currentUser.id,
    errors: state.errors.profile,
  };
};

const mapDispatchToProps = dispatch => ({
  clearProfile: () => dispatch(receiveProfile({})),
  fetchProfile: username => dispatch(fetchProfile(username)),
  updateUser: user => dispatch(updateUser(user)),
  updateUserAvatar: (id, formData) => dispatch(updateUserAvatar(id, formData)),
  removeUserAvatar: id => dispatch(removeUserAvatar(id)),
  clearProfileErrors: () => dispatch(receiveProfileErrors({})),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Profile)
);
