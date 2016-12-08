import * as BoardActions from '../actions/board_actions';

export default (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {

    case BoardActions.RECEIVE_CURRENT_BOARD:
      return action.board;

    default:
      return state;
  }
}
