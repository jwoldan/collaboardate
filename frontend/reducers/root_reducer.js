import { combineReducers } from 'redux';

import { RECEIVE_LOGOUT } from '../actions/user_actions';

import currentUser from './current_user_reducer';
import profile from './profile_reducer';
import errors from './errors_reducer';
import entities from './entities_reducer';
import shares from './board_shares_reducer';
import currentBoardId from './current_board_id_reducer';
import cardDetail from './card_detail_reducer';
import menuStatus from './menu_status_reducer';

const appReducer = combineReducers({
  currentUser,
  profile,
  errors,
  entities,
  shares,
  currentBoardId,
  cardDetail,
  menuStatus,
});

export default (state, action = {}) => {
  let appState = state;
  if (action.type === RECEIVE_LOGOUT) {
    appState = undefined;
  }

  return appReducer(appState, action);
};
