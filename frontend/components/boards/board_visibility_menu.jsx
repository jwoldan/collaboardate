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

    const menuContent = (
      <BoardVisibilityOptions updateVisibility={ this.updateVisibility }/>
    );

    return (
      <li className="visibility">
        <section className="nav-button" onClick={ this.toggle }>
          { visibility }
        </section>
        { this.renderMenu("Change Visibility", menuContent) }
      </li>
    );
  }
}

export default BoardVisibilityMenu;
