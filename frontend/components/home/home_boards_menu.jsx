import React from 'react';

import HomeBoardsMenuItem from './home_boards_menu_item';

export default ({ boards, toggle, show }) => {
  let dropdownClass = "menu dropdown boards-dropdown";
  if(show) dropdownClass += " show";

  return (
    <li className="nav-item">
      <div className="nav-button" onClick={ toggle }>
        <span className="icon" />Boards
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
