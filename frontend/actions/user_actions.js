import * as UserAPIUtil from '../util/user_api_util';
import { receiveSignupErrors, receiveLoginErrors, receiveProfileErrors }
  from './errors_actions';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_LOGOUT = 'RECEIVE_LOGOUT';
export const RECEIVE_PROFILE = 'RECEIVE_PROFILE';

export const receiveUser = (user) => {
  return {
    type: RECEIVE_USER,
    user,
  };
};

export const receiveProfile = (profile) => {
  return {
    type: RECEIVE_PROFILE,
    profile,
  };
};

export const receiveLogout = () => {
  return {
    type: RECEIVE_LOGOUT,
  };
};

export const login = (user) => {
  return dispatch => {
    return UserAPIUtil.login(user).then(
      currentUser => {
        dispatch(receiveUser(currentUser));
        dispatch(receiveLoginErrors({}));
        dispatch(receiveSignupErrors({}));
        return currentUser;
      },
      errors => {
        dispatch(receiveLoginErrors(errors.responseJSON));
        return errors;
      }
    );
  };
};

export const logout = () => {
  return dispatch => {
    return UserAPIUtil.logout().then(
      user => {
        dispatch(receiveLogout());
        return user;
      }
    );
  };
};

export const signup = (user) => {
  return dispatch => {
    return UserAPIUtil.signup(user).then(
      currentUser => {
        dispatch(receiveUser(currentUser));
        dispatch(receiveLoginErrors({}));
        dispatch(receiveSignupErrors({}));
        return currentUser;
      },
      errors => {
        dispatch(receiveSignupErrors(errors.responseJSON));
        return errors;
      }
    );
  };
};

export const updateUser = (user) => {
  return dispatch => {
    return UserAPIUtil.updateUser(user).then(
      currentUser => {
        dispatch(receiveUser(currentUser));
        dispatch(receiveProfileErrors({}));
        return currentUser;
      },
      errors => {
        dispatch(receiveProfileErrors(errors.responseJSON));
        return errors;
      }
    );
  };
};

export const updateUserAvatar = (id, formData) => {
  return dispatch => {
    return UserAPIUtil.updateUserAvatar(id, formData).then(
      currentUser => {
        dispatch(receiveUser(currentUser));
        dispatch(receiveProfileErrors({}));
        return currentUser;
      },
      errors => {
        dispatch(receiveProfileErrors(errors.responseJSON));
        return errors;
      }
    );
  };
};

export const removeUserAvatar = (id) => {
  return dispatch => {
    return UserAPIUtil.removeUserAvatar(id).then(
      currentUser => {
        dispatch(receiveUser(currentUser));
        return currentUser;
      }
    );
  };
};

export const fetchProfile = (username) => {
  return dispatch => {
    return UserAPIUtil.fetchUser(username).then(
      profile => {
        dispatch(receiveProfile(profile));
        return profile;
      }
    );
  };
};
