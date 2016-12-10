import React from 'react';
import { withRouter } from 'react-router';

import BoardTitleMenuContainer from './board_title_menu_container';
import BoardVisibilityMenuContainer from './board_visibility_menu_container';
import BoardMenuContainer from './board_menu_container';

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
      null,
      (error) => this.props.router.push('/')
    );
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
      </section>
    );
  }
}

export default withRouter(Board);
