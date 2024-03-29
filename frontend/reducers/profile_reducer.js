import * as UserActions from '../actions/user_actions';

export default (state = {}, action = {}) => {
  Object.freeze(state);

  switch (action.type) {
    case UserActions.RECEIVE_PROFILE:
      return { ...action.profile };

    default:
      return state;
  }
};
