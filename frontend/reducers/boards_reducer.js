import * as BoardActions from '../actions/board_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  let newBoard;

  switch (action.type) {

    case BoardActions.RECEIVE_BOARDS:
      return Object.assign({}, action.boards);

    case BoardActions.RECEIVE_BOARD:
      newBoard = action.board;
      return Object.assign({}, state, {
        [newBoard.id]: newBoard,
      });

    case BoardActions.RECEIVE_CURRENT_BOARD:
      const {
        id,
        title,
        starred,
        visibility,
        background,
      } = action.board;

      newBoard = Object.assign({}, {
        id, title, starred, visibility, background,
      });
      
      return Object.assign({}, state, {
        [newBoard.id]: newBoard,
      });

    case BoardActions.REMOVE_BOARD:
      const newState = Object.assign({}, state);
      delete newState[action.board.id];
      return newState;

    default:
      return state;
  }
};
