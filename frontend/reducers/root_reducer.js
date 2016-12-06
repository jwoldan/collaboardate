import { combineReducers } from 'redux';

import currentUser from './current_user_reducer';
import errors from './errors_reducer';

export default combineReducers({
  currentUser,
  errors,
});
