import React from 'react';

import BoardTitleMenuContainer from './board_title_menu_container';
import BoardVisibilityMenuContainer from './board_visibility_menu_container';
import BoardMenuContainer from './board_menu_container';

class BoardNavigation extends React.Component {

  constructor() {
    super();

    this.updateBoard = this.updateBoard.bind(this);
  }

  updateBoard(update) {
    const { board, updateBoard } = this.props;
    const updatedBoard = Object.assign({}, board, update);
    updateBoard(updatedBoard);
  }

  render () {
    const { board, disabled } = this.props;
    const { title, visibility } = board;

    return (
      <nav className="board-nav clearfix">

        <ul className="nav-left clearfix">
          <BoardTitleMenuContainer
            title={ title }
            updateBoard={ this.updateBoard }
            disabled={ disabled }
          />
        <BoardVisibilityMenuContainer
            visibility={ visibility }
            updateBoard= { this.updateBoard }
            disabled={ disabled }
          />
        </ul>

        <ul className="nav-right clearfix">
          <BoardMenuContainer board={ board } disabled={ disabled }/>
        </ul>

      </nav>
    );
  }
}

export default BoardNavigation;
