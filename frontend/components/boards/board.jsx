import React from 'react';
import { withRouter } from 'react-router';

import BoardNavigation from './board_navigation';

class Board extends React.Component {

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

  render() {
    const { currentUser, board, updateBoard } = this.props;

    const disabled = (currentUser === null);

    return (
      <section className="current-board">
        <BoardNavigation
          board={ board }
          updateBoard={ updateBoard }
          disabled={ disabled } />
      </section>
    );
  }
}

export default withRouter(Board);
