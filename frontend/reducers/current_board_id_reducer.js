import * as CurrentBoardIdActions from '../actions/current_board_id_actions';

export default (state = null, action) => {
  Object.freeze(state);
  if (action === CurrentBoardIdActions.RECEIVE_CURRENT_BOARD_ID) {
    debugger
  }
  switch(action.type) {
    case CurrentBoardIdActions.RECEIVE_CURRENT_BOARD_ID:
      if (action.boardId === null) return null;
      return action.boardId;

    default:
      return state;
  }
};
