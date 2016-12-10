import * as MenuStatusActions from '../actions/menu_status_actions';

const initialState = {
  showHomeBoardsMenu: false,
  showHomeCreateMenu: false,
  showHomeProfileMenu: false,
  showHomeInformationMenu: false,
  showHomeNotificationMenu: false,
  showBoardMenu: false,
  showBoardCreateMenu: false,
  showBoardTitleMenu: false,
  showBoardVisibilityMenu: false,
  showBoardDeleteMenu: false,
};

export default (state = initialState, action) => {
  Object.freeze(state);

  switch (action.type) {

    case MenuStatusActions.TOGGLE_MENU:
      const newState = {};
      Object.keys(state).forEach((currentMenu) => {
        if(currentMenu === action.menu) {
          newState[currentMenu] = !state[currentMenu];
        } else if (!action.leaveOthers) {
          newState[currentMenu] = false;
        } else {
          newState[currentMenu] = state[currentMenu];
        }
      });
      return newState;

    case MenuStatusActions.RESET_MENUS:
      return initialState;

    default:
      return state;
  }
};
