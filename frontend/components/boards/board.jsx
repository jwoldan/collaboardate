import React from 'react';
import { withRouter } from 'react-router';

import BoardTitleMenu from './board_title_menu';
import BoardVisibilityMenu from './board_visibility_menu';
import BoardMenu from './board_menu';

class Board extends React.Component {

  constructor() {
    super();

    this.updateBoard = this.updateBoard.bind(this);
  }

  componentDidMount() {
    this.fetchBoard(this.props.params.boardId);
  }

  componentWillReceiveProps(newProps) {
    if(this.props.params.boardId !== newProps.params.boardId) {
      this.fetchBoard(newProps.params.boardId);
    }
  }

  fetchBoard(boardId) {
    return this.props.fetchBoard(boardId).then(
      (board) => this.props.receiveCurrentBoardId(board.id)
    );
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
    const { currentUser, board } = this.props;
    const { title, visibility } = board;

    const disabled = (currentUser === null);

    return (
      <section className="current-board">
        <nav className="board-nav clearfix">

          <ul className="nav-left clearfix">
            <BoardTitleMenu
              title={ title }
              updateBoard={ this.updateBoard }
              disabled={ disabled }
            />
            <BoardVisibilityMenu
              visibility={ visibility }
              updateBoard= { this.updateBoard }
              disabled={ disabled }
            />
          </ul>

          <ul className="nav-right clearfix">
            <BoardMenu board={ board } disabled={ disabled }/>
          </ul>

        </nav>
      </section>
    );
  }
}

export default withRouter(Board);
