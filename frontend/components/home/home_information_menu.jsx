import React from 'react';

import ToggleMenu from '../general/toggle_menu';

class HomeInformationMenu extends ToggleMenu {

  render () {

    const menuContent = (
      <p className="loud small">
        <span className="bold">Collaboardate</span> is a full stack web
        application inspired by Trello and built using Ruby on Rails and
        React/Redux. The initial minimum viable product was created in just
        under two weeks as part of the App Academy software engineering course.
      </p>
    );


    return (
      <li className="nav-item">
        <div className="nav-button" onClick={ this.toggle }>
          <span className="icon icon-info"/>
        </div>
        { this.renderMenu(
            'Information',
            menuContent,
            'dropdown dropdown-information'
        ) }
      </li>
    );
  }
}

export default HomeInformationMenu;
