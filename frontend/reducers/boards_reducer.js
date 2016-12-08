import * as BoardActions from '../actions/board_actions';

export default (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {

    case BoardActions.RECEIVE_BOARDS:
      return Object.assign({}, action.boards);

    case BoardActions.RECEIVE_BOARD:
      const newBoard = action.board;
      return Object.assign({}, state, {
        [newBoard.id]: newBoard
      });

    case BoardActions.REMOVE_BOARD:
      const newState = Object.assign({}, state);
      delete newState[action.board.id];
      return newState;

    default:
      return state;
  }
};
