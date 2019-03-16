import React from 'react';

import ToggleMenu from '../general/toggle_menu';
import WithMenuStatus from '../general/with_menu_status';

const menuContent = (
  <section>
    <p className="loud small">
      <span className="bold">Collaboardate</span> is a full stack web application inspired by Trello
      and built using Ruby on Rails and React/Redux. The initial minimum viable product was created
      in just under two weeks as part of the App Academy web development intensive.
    </p>
    <p className="loud small">
      Collaboardate was created by&nbsp;
      <a href="http://jwoldan.net" target="_blank">
        Jeffrey Woldan
      </a>
      . You can see the source code on&nbsp;
      <a href="https://github.com/jwoldan/collaboardate" target="_blank">
        Github
      </a>
      .
    </p>
  </section>
);

const HomeInformationMenu = () => (
  <li className="nav-item">
    <WithMenuStatus menuKey="showHomeInformationMenu">
      {({ show, toggle }) => (
        <>
          <div className="nav-button" onClick={toggle}>
            <span className="icon icon-info" />
          </div>
          <ToggleMenu
            className="dropdown dropdown-information"
            menuTitle="Information"
            show={show}
            toggle={toggle}
          >
            {menuContent}
          </ToggleMenu>
        </>
      )}
    </WithMenuStatus>
  </li>
);

export default HomeInformationMenu;
