import React from 'react';

import ToggleMenu from '../general/toggle_menu';
import BoardCreateFormContainer from '../boards/board_create_form_container';

class HomeCreateMenuBoard extends ToggleMenu {

  render () {

    const menuContent = (
      <BoardCreateFormContainer
        toggle= { this.toggle }
        show={ this.props.show } />
    );

    return (
      <section>
        <a onClick={ this.toggle }>
          <h4>Create Board...</h4>
          <span className="quiet small">
            A board is a collection of cards ordered in a list of lists.
            Use it to manage a project, track a collection,
            or organize anything.
          </span>
        </a>
        { this.renderMenu("Create Board", menuContent, 'board-create-menu') }
      </section>
    );
  }
}

export default HomeCreateMenuBoard;
