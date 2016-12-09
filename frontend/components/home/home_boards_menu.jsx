import React from 'react';

import HomeBoardsMenuItem from './home_boards_menu_item';

export default ({ boards, show, toggle, resetMenus }) => {
  let dropdownClass = "menu dropdown dropdown-boards";
  if(show) dropdownClass += " show";

  return (
    <li className="nav-item" tabIndex="0" onBlur={ resetMenus }>
      <div className="nav-button" onClick={ toggle }>
        <span className="icon-logo" />Boards
      </div>
      <section className={ dropdownClass }>
        <section className="menu-header">
          Personal Boards
        </section>
        <ul>
          { boards.map((board) => (
            <HomeBoardsMenuItem key={ board.id } board={ board } />
          ))}
        </ul>
      </section>
    </li>
  );
};
