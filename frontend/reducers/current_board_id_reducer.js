import * as CurrentBoardIdActions from '../actions/current_board_id_actions';

export default (state = null, action) => {
  Object.freeze(state);

  switch (action.type) {

    case CurrentBoardIdActions.RECEIVE_CURRENT_BOARD_ID:
      return action.id;

    default:
      return state;
  }
};
