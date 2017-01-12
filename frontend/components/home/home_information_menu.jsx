import React from 'react';

import ToggleMenu from '../general/toggle_menu';

class HomeInformationMenu extends ToggleMenu {

  render () {

    const menuContent = (
      <section>
        <p className="loud small">
          <span className="bold">Collaboardate</span> is a full stack web
          application inspired by Trello and built using Ruby on Rails and
          React/Redux. The initial minimum viable product was created in just
          under two weeks as part of the App Academy web development intensive.
        </p>
        <p className="loud small">Collaboardate was created by&nbsp;
          <a href="http://jwoldan.net" target="_blank">Jeffrey Woldan</a>.
          The source code is available on&nbsp;
          <a href="https://github.com/jwoldan/collaboardate">Github</a>.
        </p>
      </section>
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
