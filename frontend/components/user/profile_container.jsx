import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

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

const ProfileContainer = () => {
  const navigate = useNavigate();
  const { username } = useParams();

  const { currentUser, profile, editable, errors } = useSelector(state => {
    const profile = selectProfile(state, username);

    return {
      currentUser: state.currentUser,
      profile,
      editable: profile.id === state.currentUser.id,
      errors: state.errors.profile,
    };
  });
  const dispatch = useDispatch();

  return (
    <Profile
      navigate={navigate}
      username={username}
      currentUser={currentUser}
      profile={profile}
      editable={editable}
      errors={errors}
      clearProfile={() => dispatch(receiveProfile({}))}
      fetchProfile={username => dispatch(fetchProfile(username))}
      updateUser={user => dispatch(updateUser(user))}
      updateUserAvatar={(id, formData) => dispatch(updateUserAvatar(id, formData))}
      removeUserAvatar={id => dispatch(removeUserAvatar(id))}
      clearProfileErrors={() => dispatch(receiveProfileErrors({}))}
    />
  );
};

export default ProfileContainer;
