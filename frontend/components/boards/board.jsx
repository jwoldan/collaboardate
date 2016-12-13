import React from 'react';
import { withRouter } from 'react-router';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import CardDetailContainer from '../cards/card_detail_container';
import CardEditModal from '../cards/card_edit_modal';
import BoardNavigation from './board_navigation';
import ListHolderContainer from '../lists/list_holder_container';
import ListCreateContainer from '../lists/list_create_container';

class Board extends React.Component {

  componentDidMount() {
    const { boardId, cardId } = this.props.params;
    if (typeof boardId !== 'undefined') {
      this.fetchBoardAndContents(boardId);
    } else {
      this.fetchCardDetailAndBoard(cardId);
    }
  }

  componentWillReceiveProps(newProps) {
    const { boardId, cardId } = newProps.params;
    if (this.props.params.boardId !== boardId &&
        typeof boardId !== 'undefined') {
      this.fetchBoardAndContents(boardId);
    } else if(this.props.params.cardId !== cardId &&
        this.props.cardDetail.id !== parseInt(cardId) &&
        newProps.cardDetail.id !== parseInt(cardId)) {
      this.fetchCardDetailAndBoard(cardId);
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

  fetchCardDetailAndBoard(cardId) {
    return this.props.fetchCardDetail(cardId).then(
      (card) => this.fetchBoardAndContents(card.board_id),
      (error) => this.props.router.push('/')
    );
  }

  render() {
    const { currentUser, board, lists, updateBoard, disabled } = this.props;
    const navDisabled = disabled || (currentUser.id !== board.creator_id);

    return (
      <section className="current-board">
        <CardDetailContainer disabled={ disabled }/>
        <CardEditModal />
        <BoardNavigation
          board={ board }
          updateBoard={ updateBoard }
          disabled={ navDisabled } />
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
