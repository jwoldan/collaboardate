import React from 'react';
import { withRouter } from 'react-router';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import CardDetailContainer from '../cards/card_detail_container';
import BoardNavigation from './board_navigation';
import ListHolderContainer from '../lists/list_holder_container';
import ListCreateContainer from '../lists/list_create_container';

class Board extends React.Component {

  componentDidMount() {
    this.fetchBoardAndContents(this.props.params.boardId);
  }

  componentWillReceiveProps(newProps) {
    if(this.props.params.boardId !== newProps.params.boardId) {
      this.fetchBoardAndContents(newProps.params.boardId);
    }
  }

  componentWillUnmount() {
    this.props.receiveLists({});
    this.props.receiveCards({});
  }

  fetchBoardAndContents(boardId) {
    return this.props.fetchBoard(boardId).then(
      (board) => {
        this.props.fetchLists(board.id);
        this.props.fetchCards(board.id);
      },
      (error) => this.props.router.push('/')
    );
  }

  render() {
    const { currentUser, board, lists, updateBoard } = this.props;
    const disabled = (currentUser === null);

    return (
      <section className="current-board">
        <CardDetailContainer />
        <BoardNavigation
          board={ board }
          updateBoard={ updateBoard }
          disabled={ disabled } />
        <ul className="lists clearfix">
          { lists.map((list) => (
            <ListHolderContainer
              key={ list.id }
              list={ list }
              disabled={ disabled }/>
          ))}
          <ListCreateContainer disabled={ disabled }/>
        </ul>
      </section>
    );
  }
}

export default withRouter(DragDropContext(HTML5Backend)(Board));
