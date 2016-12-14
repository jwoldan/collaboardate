import React from 'react';

import ToggleMenu from '../general/toggle_menu';

import HomeBoardsMenuList from './home_boards_menu_list';

class HomeBoardsMenu extends ToggleMenu {

  render() {
    const { personalBoards, sharedBoards  } = this.props;
    let personalBoardsMenu = null;
    let sharedBoardsMenu = null;

    const menuContent = (
      <section>
        <HomeBoardsMenuList
          title="Personal Boards"
          boards={ personalBoards }
          toggle={ this.toggle } />
        <HomeBoardsMenuList
          title="Shared Boards"
          boards={ sharedBoards }
          toggle={ this.toggle } />
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
