import * as MenuStatusActions from '../actions/menu_status_actions';

const initialState = {
  showHomeBoardsMenu: false,
  showHomeCreateMenu: false,
  showHomeProfileMenu: false,
  showHomeInformationMenu: false,
  showHomeNotificationMenu: false,
  showBoardsIndexCreate: false,
  showBoardMenu: false,
  showHomeCreateMenuBoard: false,
  showBoardTitleMenu: false,
  showBoardVisibilityMenu: false,
  showBoardShareMenu: false,
  showBoardBackgroundMenu: false,
  showBoardDeleteMenu: false,
  showListCreate: false,
  showCardEditModal: false,
  showCardDueDateMenu: false,
};

export default (state = initialState, action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {

    case MenuStatusActions.ADD_MENU:
      newState = Object.assign({}, state);
      newState[action.menu] = false;
      return newState;

    case MenuStatusActions.REMOVE_MENU:
      newState = Object.assign({}, state);
      delete newState[action.menu];
      return state;

    case MenuStatusActions.TOGGLE_MENU:
      newState = {};
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
      newState = Object.assign({}, state);
      Object.keys(newState).forEach((key) => {
        newState[key] = false;
      });
      return newState;

    default:
      return state;
  }
};
