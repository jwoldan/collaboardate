import React from 'react';

import ToggleMenu from '../general/toggle_menu';
import BoardVisibilityOptions from './board_visibility_options';

class BoardVisibilityMenu extends ToggleMenu {
  updateVisibility = e => {
    const update = { visibility: e.currentTarget.dataset.value };
    this.props.updateBoard(update);
    this.toggle();
  };

  render() {
    const { visibility, updateVisibility, disabled } = this.props;

    let buttonClass = 'nav-button';
    if (disabled) buttonClass += ' disabled';

    const menuContent = <BoardVisibilityOptions updateVisibility={this.updateVisibility} />;

    return (
      <li className="visibility">
        <section className={buttonClass} onClick={this.toggle}>
          {visibility}
        </section>
        {this.renderMenu('Change Visibility', menuContent)}
      </li>
    );
  }
}

export default BoardVisibilityMenu;
