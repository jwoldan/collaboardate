import React from 'react';

import { tryStopPropagation } from '../../util/event_util';

import ToggleMenu from '../general/toggle_menu';
import WithMenuStatus from '../general/with_menu_status';

import BoardMembersContainer from './board_members_container';
import BoardShareMenu from './board_share_menu';
import BoardBackgroundMenuContainer from './board_background_menu_container';
import BoardDeleteMenuContainer from './board_delete_menu_container';

const renderMenuContent = disabled => {
  let menuItems = null;
  if (!disabled) {
    menuItems = (
      <ul>
        <li>
          <BoardShareMenu />
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

  return (
    <section>
      <BoardMembersContainer />
      {menuItems}
    </section>
  );
};

const BoardMenu = ({ disabled, shared }) => {
  let buttonClass = 'nav-button';
  if (disabled && !shared) buttonClass += ' disabled';

  return (
    <li className="board-menu">
      <WithMenuStatus menuKey="showBoardMenu">
        {({ show, toggle }) => (
          <>
            <section className={buttonClass} onClick={toggle}>
              <span className="icon icon-more-white icon-show-menu" />
              Show Menu
            </section>
            <ToggleMenu disabled={disabled} menuTitle="Menu" show={show} toggle={toggle}>
              {renderMenuContent(disabled)}
            </ToggleMenu>
          </>
        )}
      </WithMenuStatus>
    </li>
  );
};

export default BoardMenu;
