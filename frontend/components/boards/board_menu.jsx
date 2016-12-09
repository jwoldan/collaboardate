import React from 'react';

import ToggleMenu from '../general/toggle_menu';
import BoardDeleteMenuContainer from './board_delete_menu_container';

class BoardMenu extends ToggleMenu {



  render() {

    const menuContent = (
      <section className="delete-board">
        <ul>
          <li><BoardDeleteMenuContainer /></li>
        </ul>
      </section>
    );

    return (
      <li className="board-menu">
        <section className="nav-button" onClick={ this.toggle }>
          Show Menu
        </section>
        { this.renderMenu("Menu", menuContent) }
      </li>
    );
  }

}

export default BoardMenu;
