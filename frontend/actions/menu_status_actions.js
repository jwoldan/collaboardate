
export const TOGGLE_MENU = 'TOGGLE_MENU';
export const RESET_MENUS = 'RESET_MENUS';

export const toggleMenu = (menu, leaveOthers = false) => ({
  type: TOGGLE_MENU,
  menu,
  leaveOthers,
});

export const resetMenus = () => ({
  type: RESET_MENUS,
});
