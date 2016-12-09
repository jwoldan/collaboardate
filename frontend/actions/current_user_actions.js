import * as CurrentUserAPIUtil from '../util/current_user_api_util';
import { receiveSignupErrors, receiveLoginErrors } from './errors_actions';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_LOGOUT = 'RECEIVE_LOGOUT';

export const receiveUser = (user) => {
  return {
    type: RECEIVE_USER,
    user,
  };
};

export const receiveLogout = () => {
  return {
    type: RECEIVE_LOGOUT,
  };
};

export const login = (user) => {
  return dispatch => {
    return CurrentUserAPIUtil.login(user).then(
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
    return CurrentUserAPIUtil.logout().then(
      user => {
        dispatch(receiveLogout());
        return user;
      }
    );
  };
};

export const signup = (user) => {
  return dispatch => {
    return CurrentUserAPIUtil.signup(user).then(
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
