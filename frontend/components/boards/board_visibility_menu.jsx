import React from 'react';

import ToggleMenu from '../general/toggle_menu';
import BoardVisibilityOptions from './board_visibility_options';

class BoardVisibilityMenu extends ToggleMenu {

  constructor() {
    super();

    this.updateVisibility = this.updateVisibility.bind(this);
  }

  updateVisibility(e) {
    const update = { visibility: e.currentTarget.dataset.value };
    this.props.updateBoard(update);
    this.toggle();
  }

  render() {
    const { visibility, updateVisibility } = this.props;
    const { show } = this.state;

    let visibilityMenuClass = "menu";
    if (show) visibilityMenuClass += " show";

    return (
      <li className="visibility">
        <section className="nav-button" onClick={ this.toggle }>
          { visibility }
        </section>
        <section className={ visibilityMenuClass }>
          <span
            className="menu-close"
            onClick={ this.toggle }
          />
          <section className="menu-header">
            Change Visibility
          </section>
          <BoardVisibilityOptions updateVisibility={ this.updateVisibility }/>
        </section>
      </li>
    );
  }
}

export default BoardVisibilityMenu;
