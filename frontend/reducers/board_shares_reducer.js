import * as BoardShareActions from '../actions/board_share_actions';

export default (state = {}, action = {}) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {
    case BoardShareActions.RECEIVE_SHARES:
      return { ...action.shares };

    case BoardShareActions.RECEIVE_SHARE:
      newState = { ...state };
      newState[action.share.id] = action.share;
      return newState;

    case BoardShareActions.REMOVE_SHARE:
      newState = { ...state };
      delete newState[action.share.id];
      return newState;

    default:
      return state;
  }
};
