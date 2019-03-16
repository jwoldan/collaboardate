import React from 'react';

import ToggleMenu from '../general/toggle_menu';
import BoardMembersContainer from './board_members_container';
import BoardShareMenuContainer from './board_share_menu_container';
import BoardBackgroundMenuContainer from './board_background_menu_container';
import BoardDeleteMenuContainer from './board_delete_menu_container';

class BoardMenu extends ToggleMenu {
  toggle = e => {
    this.stopPropagation(e);
    const { disabled, shared } = this.props;
    if (!disabled || shared) {
      this.props.toggle();
    }
  };

  render() {
    let buttonClass = 'nav-button';
    const { disabled, shared } = this.props;
    if (disabled && !shared) buttonClass += ' disabled';

    let menuItems = null;
    if (!disabled) {
      menuItems = (
        <ul>
          <li>
            <BoardShareMenuContainer />
          </li>
          <li>
            <BoardBackgroundMenuContainer />
          </li>
          <li>
            <BoardDeleteMenuContainer />
          </li>
        </ul>
      );
    }

    const menuContent = (
      <section>
        <BoardMembersContainer />
        {menuItems}
      </section>
    );

    return (
      <li className="board-menu">
        <section className={buttonClass} onClick={this.toggle}>
          <span className="icon icon-more-white icon-show-menu" />
          Show Menu
        </section>
        {this.renderMenu('Menu', menuContent)}
      </li>
    );
  }
}

export default BoardMenu;
