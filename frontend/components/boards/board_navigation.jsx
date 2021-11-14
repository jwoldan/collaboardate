import React from 'react';

import BoardTitleMenu from './board_title_menu';
import BoardVisibilityMenu from './board_visibility_menu';
import BoardMenuContainer from './board_menu_container';

class BoardNavigation extends React.Component {
  updateBoard = (update) => {
    const { board, updateBoard } = this.props;
    const updatedBoard = Object.assign({}, board, update);
    updateBoard(updatedBoard);
  };

  render() {
    const { board, disabled } = this.props;
    const { title, visibility } = board;

    return (
      <nav className="board-nav clearfix">
        <ul className="nav-left clearfix">
          <BoardTitleMenu title={title} updateBoard={this.updateBoard} disabled={disabled} />
          <BoardVisibilityMenu
            visibility={visibility}
            updateBoard={this.updateBoard}
            disabled={disabled}
          />
        </ul>

        <ul className="nav-right clearfix">
          <BoardMenuContainer board={board} disabled={disabled} />
        </ul>
      </nav>
    );
  }
}

export default BoardNavigation;
