import * as CurrentUserAPIUtil from '../util/current_user_api_util';
import { receiveSignupErrors, receiveLoginErrors } from './errors_actions';

export const RECEIVE_USER = 'RECEIVE_USER';

export const receiveUser = (user) => {
  return {
    type: RECEIVE_USER,
    user,
  };
};

export const login = (user) => {
  return dispatch => {
    return CurrentUserAPIUtil.login(user).then(
      currentUser => {
        dispatch(receiveUser(currentUser));
        dispatch(receiveLoginErrors({}));
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
        dispatch(receiveUser(null));
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
