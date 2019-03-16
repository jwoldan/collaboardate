import React from 'react';

import BoardCreateFormContainer from './board_create_form_container';

import ToggleMenu from '../general/toggle_menu';
import WithMenuStatus from '../general/with_menu_status';

const BoardsIndexCreate = () => (
  <li className="board board-create">
    <WithMenuStatus menuKey="showBoardsIndexCreate">
      {({ show, toggle }) => (
        <>
          <section onClick={toggle}>Create new board...</section>
          <ToggleMenu className="board-create-menu" menuTitle="Create" show={show} toggle={toggle}>
            <BoardCreateFormContainer show={show} toggle={toggle} />
          </ToggleMenu>
        </>
      )}
    </WithMenuStatus>
  </li>
);

export default BoardsIndexCreate;
