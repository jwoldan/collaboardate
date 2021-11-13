import * as ErrorsActions from '../actions/errors_actions';

const initialState = {
  signup: {},
  login: [],
  profile: [],
  team: [],
};

export default (state = initialState, action = {}) => {
  Object.freeze(state);

  switch (action.type) {
    case ErrorsActions.RECEIVE_SIGNUP_ERRORS:
      return { ...state, signup: action.errors };

    case ErrorsActions.RECEIVE_LOGIN_ERRORS:
      return { ...state, login: action.errors };

    case ErrorsActions.RECEIVE_PROFILE_ERRORS:
      return { ...state, profile: action.errors };

    default:
      return state;
  }
};
