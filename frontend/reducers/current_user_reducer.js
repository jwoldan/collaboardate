import * as CurrentUserActions from '../actions/current_user_actions';

export default (state = null, action) => {
  Object.freeze(state);

  switch(action.type) {

    case CurrentUserActions.RECEIVE_USER:
      if (action.user === null) return null;
      return Object.assign({}, action.user);
      
    default:
      return state;
  }
};
