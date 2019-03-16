import React from 'react';

import ToggleMenu from '../general/toggle_menu';
import WithMenuStatus from '../general/with_menu_status';

import HomeBoardsMenuList from './home_boards_menu_list';

const HomeBoardsMenu = ({ personalBoards, sharedBoards }) => (
  <li className="nav-item">
    <WithMenuStatus menuKey="showHomeBoardsMenu">
      {({ show, toggle }) => (
        <>
          <div className="nav-button" onClick={toggle}>
            <span className="icon-logo" />
            Boards
            <ToggleMenu className="dropdown dropdown-boards" show={show} toggle={toggle}>
              <section>
                <HomeBoardsMenuList
                  title="Personal Boards"
                  boards={personalBoards}
                  toggle={toggle}
                />
                <HomeBoardsMenuList title="Shared Boards" boards={sharedBoards} toggle={toggle} />
              </section>
            </ToggleMenu>
          </div>
        </>
      )}
    </WithMenuStatus>
  </li>
);

export default HomeBoardsMenu;
