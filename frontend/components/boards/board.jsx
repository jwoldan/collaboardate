import React from 'react';

import BoardTitleMenu from './board_title_menu';
import BoardVisibilityMenu from './board_visibility_menu';

class Board extends React.Component {

  constructor() {
    super();

    this.updateCurrentBoard = this.updateCurrentBoard.bind(this);
  }

  componentDidMount() {
    this.props.fetchCurrentBoard(this.props.params.boardId);
  }

  componentWillReceiveProps(newProps) {
    if(this.props.params.boardId !== newProps.params.boardId) {
      this.props.fetchCurrentBoard(newProps.params.boardId);
    }
  }

  updateCurrentBoard(update) {
    const { currentBoard, updateCurrentBoard } = this.props;
    const updatedBoard = Object.assign({}, currentBoard, update);
    updateCurrentBoard(updatedBoard);
  }

  render() {
    const { currentBoard } = this.props;
    const { title, visibility } = currentBoard;

    return (
      <section className="current-board">
        <nav className="board-nav clearfix">

          <ul className="nav-left clearfix">
            <BoardTitleMenu
              title={ title }
              updateBoard={ this.updateCurrentBoard }
            />
            <BoardVisibilityMenu
              visibility={ visibility }
              updateBoard= { this.updateCurrentBoard }
            />
          </ul>

        </nav>
      </section>
    );
  }
}

export default Board;
