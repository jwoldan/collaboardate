import React from 'react';
import { withRouter } from 'react-router';

import BoardNavigation from './board_navigation';
import List from '../lists/list';
import ListCreateContainer from '../lists/list_create_container';

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
      (board) => this.props.fetchLists(board.id),
      (error) => this.props.router.push('/')
    );
  }

  render() {
    const { currentUser, board, lists, updateBoard } = this.props;
    const disabled = (currentUser === null);

    return (
      <section className="current-board">
        <BoardNavigation
          board={ board }
          updateBoard={ updateBoard }
          disabled={ disabled } />
        <ul className="lists clearfix">
          { lists.map((list) => (
            <List key={ list.id } list={ list }/>
          ))}
          <ListCreateContainer />
        </ul>
      </section>
    );
  }
}

export default withRouter(Board);
