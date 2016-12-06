import * as CurrentUserActions from '../actions/current_user_actions';

const initialState = {};

export default (state = initialState, action) => {
  Object.freeze(state);

  switch(action.type) {

    case CurrentUserActions.RECEIVE_USER:
      return Object.assign({}, action.user);
      
    default:
      return state;
  }
};
