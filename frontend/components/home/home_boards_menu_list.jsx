import React from 'react';

import HomeBoardsMenuItem from './home_boards_menu_item';

export default ({ title, boards, toggle }) => {
  if (boards.length > 0) {
    return (
      <section>
        <section className="menu-header">{title}</section>
        <ul>
          {boards.map((board) => (
            <HomeBoardsMenuItem key={board.id} board={board} toggle={toggle} />
          ))}
        </ul>
      </section>
    );
  } else {
    return null;
  }
};
