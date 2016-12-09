import React from 'react';

import ToggleMenu from '../general/toggle_menu';
import BoardDeleteMenuContainer from './board_delete_menu_container';

class BoardMenu extends ToggleMenu {

  render() {

    let buttonClass = "nav-button";
    if (this.props.disabled) buttonClass += " disabled";

    const menuContent = (
      <section className="delete-board">
        <ul>
          <li><BoardDeleteMenuContainer /></li>
        </ul>
      </section>
    );

    return (
      <li className="board-menu">
        <section className={ buttonClass } onClick={ this.toggle }>
          Show Menu
        </section>
        { this.renderMenu("Menu", menuContent) }
      </li>
    );
  }

}

export default BoardMenu;
