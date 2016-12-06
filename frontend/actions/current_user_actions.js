import * as CurrentUserAPIUtil from '../util/current_user_api_util';
import { receiveSessionErrors } from './errors_actions';

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
        dispatch(receiveSessionErrors({}));
        return currentUser;
      },
      errors => {
        dispatch(receiveSessionErrors(errors.responseJSON));
        return errors;
      }
    );
  };
};

export const logout = () => {
  return dispatch => {
    return CurrentUserAPIUtil.logout().then(
      () => {
        dispatch(receiveUser(null));
        return null;
      }
    );
  };
};

export const signup = (user) => {
  return dispatch => {
    return CurrentUserAPIUtil.signup(user).then(
      currentUser => {
        dispatch(receiveUser(currentUser));
        dispatch(receiveSessionErrors({}));
        return currentUser;
      },
      errors => {
        dispatch(receiveSessionErrors(errors.responseJSON));
        return errors;
      }
    );
  };
};
