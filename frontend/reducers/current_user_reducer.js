import * as CurrentUserActions from '../actions/current_user_actions';

export default (state = null, action) => {
  Object.freeze(state);

  switch(action.type) {

    case CurrentUserActions.RECEIVE_USER:
      // debugger
      return action.user;

    default:
      return state;
  }
};
