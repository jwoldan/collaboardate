import React from 'react';

import ToggleMenu from '../general/toggle_menu';
import WithMenuStatus from '../general/with_menu_status';

import BoardShareMenuContentContainer from './board_share_menu_content_container';

const BoardShareMenu = ({ disabled }) => (
  <section className="board-menu-item">
    <WithMenuStatus menuKey="showBoardShareMenu" leaveOthers>
      {({ show, toggle }) => (
        <>
          <a onClick={toggle}>Edit Sharing</a>
          <ToggleMenu disabled={disabled} menuTitle="Sharing" show={show} toggle={toggle}>
            <BoardShareMenuContentContainer />
          </ToggleMenu>
        </>
      )}
    </WithMenuStatus>
  </section>
);

export default BoardShareMenu;
