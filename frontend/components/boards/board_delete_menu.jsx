import React from 'react';
import { withRouter } from 'react-router';

import ToggleMenu from '../general/toggle_menu';

class BoardDeleteMenu extends ToggleMenu {

  constructor() {
    super();

    this.deleteBoard = this.deleteBoard.bind(this);
  }

  deleteBoard() {
    this.props.deleteBoard(this.props.currentBoardId).then(() => {
      this.props.router.push('/');
    });
  }

  render() {


    const menuContent = (
      <section className="menu-section">
        <span className="small loud">
          Deleting a board is permanent and can&#8217;t be undone!
          If you&#8217;re sure, click the delete button below.
        </span>
        <a onClick={ this.deleteBoard } className="button red">
          Delete
        </a>
      </section>
    );

    return (
      <section>
        <a onClick={ this.toggle }>
          Delete Board
        </a>
        { this.renderMenu("Delete Board?", menuContent) }
      </section>
    );
  }
}

export default withRouter(BoardDeleteMenu);
