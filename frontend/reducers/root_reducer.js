import { combineReducers } from 'redux';

import { RECEIVE_LOGOUT } from '../actions/current_user_actions';

import currentUser from './current_user_reducer';
import errors from './errors_reducer';
import boards from './boards_reducer';
import lists from './lists_reducer';
import cards from './cards_reducer';
import cardDetail from './card_detail_reducer';
import menuStatus from './menu_status_reducer';

const appReducer = combineReducers({
  currentUser,
  errors,
  boards,
  lists,
  cards,
  cardDetail,
  menuStatus,
});


export default (state, action) => {
  if (action.type === RECEIVE_LOGOUT) {
    state = undefined;
  }

  return appReducer(state, action);
};
