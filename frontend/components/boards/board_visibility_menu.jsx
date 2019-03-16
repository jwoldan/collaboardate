import React from 'react';

import ToggleMenu from '../general/toggle_menu';
import WithMenuStatus from '../general/with_menu_status';

import BoardVisibilityUpdateContainer from './board_visibility_update_container';

const BoardVisibilityMenu = ({ disabled, visibility }) => {
  let buttonClass = 'nav-button';
  if (disabled) buttonClass += ' disabled';

  return (
    <li className="visibility">
      <WithMenuStatus menuKey="showBoardVisibilityMenu">
        {({ show, toggle }) => (
          <>
            <section className={buttonClass} onClick={toggle}>
              {visibility}
            </section>
            <ToggleMenu
              disabled={disabled}
              menuTitle="Change Visibility"
              show={show}
              toggle={toggle}
            >
              <BoardVisibilityUpdateContainer toggle={toggle} />
            </ToggleMenu>
          </>
        )}
      </WithMenuStatus>
    </li>
  );
};

export default BoardVisibilityMenu;
