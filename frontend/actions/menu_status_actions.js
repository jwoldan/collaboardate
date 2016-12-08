
export const TOGGLE_MENU = 'TOGGLE_MENU';
export const RESET_MENUS = 'RESET_MENUS';

export const toggleMenu = (menu) => ({
  type: TOGGLE_MENU,
  menu,
});

export const resetMenus = () => ({
  type: RESET_MENUS,
});
