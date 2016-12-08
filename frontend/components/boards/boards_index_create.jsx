import React from 'react';

import BoardCreateMenu from './board_create_menu';

class BoardsIndexCreate extends React.Component {
  constructor() {
    super();

    this.state = {
      showMenu: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ showMenu: !this.state.showMenu });
  }

  render() {
    return (
      <li className="board board-create" onClick={ this.toggle }>
        Create new board...
        <BoardCreateMenu
          show={ this.state.showMenu }
          toggle = { this.toggle }
        />
      </li>
    );
  }
}

export default BoardsIndexCreate;
