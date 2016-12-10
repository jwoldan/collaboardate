import React from 'react';

import ToggleMenu from '../general/toggle_menu';
import BoardCreateMenuContainer from '../boards/board_create_menu_container';

class HomeCreateMenu extends ToggleMenu {

  componentWillReceiveProps(newProps) {
    if(newProps.show === false) {
      this.setState({ showMenu: false });
    }
  }

  render() {
    const { resetMenus } = this.props;

    const menuContent = (
      <ul>
        <li>
          <BoardCreateMenuContainer />
        </li>
      </ul>
    );

    return (
      <li className="nav-item" tabIndex="0" onBlur={ resetMenus }>
        <div className="nav-button" onClick={ this.toggle }>
          <span className="icon icon-add" />
        </div>
        { this.renderMenu('Create', menuContent, 'dropdown dropdown-create') }
      </li>
    );

  }
}

export default HomeCreateMenu;
