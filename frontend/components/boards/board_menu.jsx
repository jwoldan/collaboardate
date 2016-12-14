import React from 'react';

import ToggleMenu from '../general/toggle_menu';
import BoardShareMenuContainer from './board_share_menu_container';
import BoardDeleteMenuContainer from './board_delete_menu_container';

class BoardMenu extends ToggleMenu {

  render() {

    let buttonClass = "nav-button";
    if (this.props.disabled) buttonClass += " disabled";

    const menuContent = (
      <section className="delete-board">
        <ul>
          <li><BoardShareMenuContainer /></li>
          <li><BoardDeleteMenuContainer /></li>
        </ul>
      </section>
    );

    return (
      <li className="board-menu">
        <section className={ buttonClass } onClick={ this.toggle }>
          <span className="icon icon-more-white icon-show-menu" />Show Menu
        </section>
        { this.renderMenu("Menu", menuContent) }
      </li>
    );
  }

}

export default BoardMenu;
