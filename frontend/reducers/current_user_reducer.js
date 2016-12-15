import * as UserActions from '../actions/user_actions';

export default (state = null, action) => {
  Object.freeze(state);

  switch(action.type) {

    case UserActions.RECEIVE_USER:
      if (action.user === null) return null;
      return Object.assign({}, action.user);
      
    default:
      return state;
  }
};
