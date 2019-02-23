import React from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import CardDetailContainer from '../cards/card_detail_container';
import CardEditModal from '../cards/card_edit_modal';
import BoardNavigation from './board_navigation';
import ListHolderContainer from '../lists/list_holder_container';
import ListCreateContainer from '../lists/list_create_container';

class Board extends React.Component {
  componentDidMount() {
    const { params } = this.props.match;

    let { boardId, cardId } = params;
    boardId = parseInt(boardId);
    cardId = parseInt(cardId);

    // check if boardId is NaN
    if (boardId === boardId) {
      this.fetchBoardAndContents(boardId);
    } else {
      this.fetchCardDetailAndBoard(cardId);
    }
  }

  componentWillReceiveProps(newProps) {
    const oldParams = this.props.match.params;
    const oldBoardId = parseInt(oldParams.boardId);
    const oldCardId = parseInt(oldParams.cardId);
    const newParams = newProps.match.params;
    const newBoardId = parseInt(newParams.boardId);
    const newCardId = parseInt(newParams.cardId);

    if (
      oldBoardId !== newBoardId &&
      this.props.currentBoardId !== newBoardId &&
      // check if boardId is NaN
      newBoardId === newBoardId
    ) {
      this.fetchBoardAndContents(newBoardId);
    } else if (
      oldCardId !== newCardId &&
      this.props.cardDetail.id !== newCardId &&
      newProps.cardDetail.id !== newCardId &&
      // check if cardId is NaN
      newCardId === newCardId
    ) {
      this.fetchCardDetailAndBoard(newCardId);
    }
  }

  componentWillUnmount() {
    this.props.receiveLists({});
    this.props.receiveCards({});
    this.props.receiveShares({});
    this.props.receiveCurrentBoardId(null);
  }

  fetchBoardAndContents(boardId) {
    this.props.receiveLists({});
    this.props.receiveCards({});
    this.props.receiveShares({});
    this.props.receiveCurrentBoardId(boardId);
    return this.props.fetchBoard(boardId).then(
      board => {
        this.props.fetchLists(board.id).then(lists => {
          this.props.fetchCards(board.id).then(cards => {
            this.props.fetchShares(board.id);
          });
        });
      },
      error => this.props.history.push('/')
    );
  }

  fetchCardDetailAndBoard(cardId) {
    return this.props.fetchCardDetail(cardId).then(
      card => {
        if (this.props.currentBoardId !== card.board_id) {
          this.fetchBoardAndContents(card.board_id);
        }
      },
      error => this.props.history.push('/')
    );
  }

  render() {
    const { currentUser, board, lists, updateBoard, disabled } = this.props;
    const navDisabled = disabled || currentUser.id !== board.creator.id;

    return (
      <section className="current-board">
        <CardDetailContainer disabled={disabled} />
        <CardEditModal />
        <BoardNavigation board={board} updateBoard={updateBoard} disabled={navDisabled} />
        <ul className="lists clearfix">
          {lists.map(list => (
            <ListHolderContainer key={list.id} list={list} disabled={disabled} />
          ))}
          <ListCreateContainer disabled={disabled} />
        </ul>
      </section>
    );
  }
}

export default DragDropContext(HTML5Backend)(Board);
