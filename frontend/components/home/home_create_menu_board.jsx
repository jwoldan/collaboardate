import React from 'react';

import BoardCreateFormContainer from '../boards/board_create_form_container';
import ToggleMenu from '../general/toggle_menu';
import WithMenuStatus from '../general/with_menu_status';

const HomeCreateMenuBoard = () => (
  <section>
    <WithMenuStatus menuKey="showHomeCreateMenuBoard" leaveOthers>
      {({ show, toggle }) => (
        <>
          <a onClick={toggle}>
            <h4>Create Board...</h4>
            <span className="quiet small">
              A board is a collection of cards ordered in a list of lists. Use it to manage a
              project, track a collection, or organize anything.
            </span>
          </a>
          <ToggleMenu
            className="board-create-menu"
            menuTitle="Create Board"
            show={show}
            toggle={toggle}
          >
            <BoardCreateFormContainer toggle={toggle} show={show} />
          </ToggleMenu>
        </>
      )}
    </WithMenuStatus>
  </section>
);

export default HomeCreateMenuBoard;
