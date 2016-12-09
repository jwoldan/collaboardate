import React from 'react';

import BoardTitleMenu from './board_title_menu';
import BoardVisibilityMenu from './board_visibility_menu';

class Board extends React.Component {

  constructor() {
    super();

    this.updateBoard = this.updateBoard.bind(this);
  }

  componentDidMount() {
    this.props.receiveCurrentBoardId(this.props.params.boardId);
  }

  componentWillReceiveProps(nextProps) {
    this.props.receiveCurrentBoardId(nextProps.params.boardId);
  }

  componentWillUnmount() {
    this.props.receiveCurrentBoardId(null);
  }

  updateBoard(update) {
    const { board, updateBoard } = this.props;
    const updatedBoard = Object.assign({}, board, update);
    updateBoard(updatedBoard);
  }

  render() {
    const { board } = this.props;
    const { title, visibility } = board;

    return (
      <section className="current-board">
        <nav className="board-nav clearfix">

          <ul className="nav-left clearfix">
            <BoardTitleMenu
              title={ title }
              updateBoard={ this.updateBoard }
            />
            <BoardVisibilityMenu
              visibility={ visibility }
              updateBoard= { this.updateBoard }
            />
          </ul>

        </nav>
      </section>
    );
  }
}

export default Board;
