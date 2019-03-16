import React from 'react';

import ToggleMenu from '../general/toggle_menu';
import WithMenuStatus from '../general/with_menu_status';

import HomeCreateMenuBoard from './home_create_menu_board';

const HomeCreateMenu = () => (
  <li className="nav-item">
    <WithMenuStatus menuKey="showHomeCreateMenu">
      {({ show, toggle }) => (
        <>
          <div className="nav-button" onClick={toggle}>
            <span className="icon icon-add" />
          </div>
          <ToggleMenu
            className="dropdown dropdown-create"
            menuTitle="Create"
            show={show}
            toggle={toggle}
          >
            <ul>
              <li>
                <HomeCreateMenuBoard />
              </li>
            </ul>
          </ToggleMenu>
        </>
      )}
    </WithMenuStatus>
  </li>
);

export default HomeCreateMenu;
