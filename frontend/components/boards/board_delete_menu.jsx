import React from 'react';
import { withRouter } from 'react-router-dom';

import ToggleMenu from '../general/toggle_menu';

class BoardDeleteMenu extends ToggleMenu {
  constructor() {
    super();

    this.deleteBoard = this.deleteBoard.bind(this);
  }

  deleteBoard() {
    const { params } = this.props.match;

    this.props.deleteBoard(params.boardId).then(() => {
      this.props.history.push('/');
    });
  }

  render() {
    const menuContent = (
      <section className="menu-section">
        <span className="small loud">
          Deleting a board is permanent and can&#8217;t be undone! If you&#8217;re sure, click the
          delete button below.
        </span>
        <a onClick={this.deleteBoard} className="button red">
          Delete
        </a>
      </section>
    );

    return (
      <section className="board-menu-item">
        <a onClick={this.toggle}>Delete Board</a>
        {this.renderMenu('Delete Board?', menuContent)}
      </section>
    );
  }
}

export default withRouter(BoardDeleteMenu);
