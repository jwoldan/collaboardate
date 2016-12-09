import { combineReducers } from 'redux';

import currentUser from './current_user_reducer';
import errors from './errors_reducer';
import boards from './boards_reducer';
import currentBoardId from './current_board_id_reducer';
import menuStatus from './menu_status_reducer';

export default combineReducers({
  currentUser,
  errors,
  boards,
  currentBoardId,
  menuStatus,
});
