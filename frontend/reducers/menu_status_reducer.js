import * as MenuStatusActions from '../actions/menu_status_actions';

const initialState = {
  boards: false,
  create: false,
  profile: false,
  information: false,
  notification: false,
};

export default (state = initialState, action) => {
  Object.freeze(state);

  switch (action.type) {

    case MenuStatusActions.TOGGLE_MENU:
      const newState = {};

      Object.keys(state).forEach((currentMenu) => {
        if(currentMenu === action.menu) {
          newState[currentMenu] = !state[currentMenu];
        } else {
          newState[currentMenu] = false;
        }
      });
      return newState;

    case MenuStatusActions.RESET_MENUS:
      return initialState;

    default:
      return state;
  }
};
