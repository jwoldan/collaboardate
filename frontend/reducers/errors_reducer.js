import * as ErrorsActions from '../actions/errors_actions';

const initialState = {
  session: {},
  profile: [],
  team: [],
};

export default (state = initialState, action) => {
  Object.freeze(state);

  switch(action.type) {

    case ErrorsActions.RECEIVE_SESSION_ERRORS:
      return Object.assign({}, state, {
        session: action.errors
      });

    default:
      return state;
  }
};
