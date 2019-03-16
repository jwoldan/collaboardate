import React from 'react';

import ToggleMenu from '../general/toggle_menu';
import WithMenuStatus from '../general/with_menu_status';

import BoardTitleMenuContentContainer from './board_title_menu_content_container';

const BoardTitleMenu = ({ disabled, title }) => {
  let buttonClass = 'nav-button';
  if (disabled) buttonClass += ' disabled';

  return (
    <li className="title">
      <WithMenuStatus menuKey="showBoardTitleMenu">
        {({ show, toggle }) => (
          <>
            <section className={buttonClass} onClick={toggle}>
              <h2>{title}</h2>
            </section>
            <ToggleMenu disabled={disabled} menuTitle="Rename Board" show={show} toggle={toggle}>
              <BoardTitleMenuContentContainer title={title} toggle={toggle} />
            </ToggleMenu>
          </>
        )}
      </WithMenuStatus>
    </li>
  );
};

export default BoardTitleMenu;
