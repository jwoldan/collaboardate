import React from 'react';

import ToggleMenu from '../general/toggle_menu';
import BoardCreateFormContainer from './board_create_form_container';

class BoardsIndexCreate extends ToggleMenu {

  render() {

    const menuContent = (
      <BoardCreateFormContainer show= { this.props.show }/>
    );

    return (
      <li className="board board-create" >
        <section onClick={ this.toggle }>
        Create new board...
        </section>
        { this.renderMenu('Create', menuContent, 'board-create-menu') }
      </li>
    );
  }
}
export default BoardsIndexCreate;
