import * as BoardActions from '../actions/board_actions';
import * as BoardShareActions from '../actions/board_share_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  let newBoard;
  let newState;
  let users;
  let share;

  switch (action.type) {

    case BoardActions.RECEIVE_BOARDS:
      return Object.assign({}, action.boards);

    case BoardActions.RECEIVE_BOARD:
      newBoard = action.board;
      return Object.assign({}, state, {
        [newBoard.id]: newBoard,
      });

    case BoardActions.REMOVE_BOARD:
      newState = Object.assign({}, state);
      delete newState[action.board.id];
      return newState;

    case BoardShareActions.RECEIVE_SHARE:
      newState = Object.assign({}, state);
      share = action.share;
      users = newState[share.board_id].users;
      users = Object.assign({}, users,
        { [share.sharee.id]: share.sharee }
      );
      newState[share.board_id].users = users;
      return newState;

    case BoardShareActions.REMOVE_SHARE:
      newState = Object.assign({}, state);
      share = action.share;
      users = newState[share.board_id].users;
      users = Object.assign({}, users);
      delete users[action.share.sharee_id];
      newState[share.board_id].users = users;
      return newState;

    default:
      return state;
  }
};
