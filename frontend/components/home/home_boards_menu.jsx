import React from 'react';

import ToggleMenu from '../general/toggle_menu';
import HomeBoardsMenuItem from './home_boards_menu_item';

class HomeBoardsMenu extends ToggleMenu {

  render() {
    const { boards } = this.props;

    const menuContent = (
      <section>
        <section className="menu-header">
          Personal Boards
        </section>
        <ul>
          { boards.map((board) => (
            <HomeBoardsMenuItem key={ board.id } board={ board } />
          ))}
        </ul>
      </section>
    );

    return (
      <li className="nav-item">
        <div className="nav-button" onClick={ this.toggle }>
          <span className="icon-logo" />Boards
        </div>
        { this.renderMenu(null, menuContent, 'dropdown dropdown-boards') }
      </li>
    );
  }
}

export default HomeBoardsMenu;
