import React from 'react';
import { withRouter } from 'react-router-dom';

import ToggleMenu from '../general/toggle_menu';
import WithMenuStatus from '../general/with_menu_status';

class BoardDeleteMenu extends React.Component {
  deleteBoard = () => {
    const { params } = this.props.match;

    this.props.deleteBoard(params.boardId).then(() => {
      this.props.history.push('/');
    });
  };

  renderMenuContent() {
    return (
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
  }

  render() {
    const { disabled } = this.props;

    return (
      <section className="board-menu-item">
        <WithMenuStatus menuKey="showBoardDeleteMenu" leaveOthers>
          {({ show, toggle }) => (
            <>
              <a onClick={toggle}>Delete Board</a>
              <ToggleMenu disabled={disabled} menuTitle="Delete Board?" show={show} toggle={toggle}>
                {this.renderMenuContent()}
              </ToggleMenu>
            </>
          )}
        </WithMenuStatus>
      </section>
    );
  }
}

export default withRouter(BoardDeleteMenu);
