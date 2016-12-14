import React from 'react';

import ToggleMenu from '../general/toggle_menu';

class BoardShareMenu extends ToggleMenu {

  constructor() {
    super();

  }

  render() {

    const menuContent = (
      <section className="menu-section">
        <span className="small loud">
          There will be sharing stuff here
        </span>
      </section>
    );

    return (
      <section>
        <a onClick={ this.toggle }>
          Edit Sharing
        </a>
        { this.renderMenu("Sharing", menuContent) }
      </section>
    );
  }
}

export default BoardShareMenu;
