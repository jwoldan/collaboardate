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
    let { boardId, cardId } = this.props.params;
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
    let { boardId, cardId } = newProps.params;
    boardId = parseInt(boardId);
    cardId = parseInt(cardId);
    if (parseInt(this.props.params.boardId) !== boardId &&
        this.props.currentBoardId !== boardId &&
        // check if boardId is NaN
        boardId === boardId) {
      this.fetchBoardAndContents(boardId);
    } else if(parseInt(this.props.params.cardId) !== cardId &&
        this.props.cardDetail.id !== cardId &&
        newProps.cardDetail.id !== cardId &&
        // check if cardId is NaN
        cardId === cardId) {
      this.fetchCardDetailAndBoard(cardId);
    }
  }

  componentWillUnmount() {
    this.props.receiveLists({});
    this.props.receiveCards({});
    this.props.receiveCurrentBoardId(null);
  }

  fetchBoardAndContents(boardId) {
    this.props.receiveLists({});
    this.props.receiveCards({});
    this.props.receiveCurrentBoardId(boardId);
    return this.props.fetchBoard(boardId).then(
      (board) => {
        this.props.fetchLists(board.id).then(
          (lists) => {
            this.props.fetchCards(board.id);
          }
        );

      },
      (error) => this.props.router.push('/')
    );
  }

  fetchCardDetailAndBoard(cardId) {
    return this.props.fetchCardDetail(cardId).then(
      (card) => {
        if (this.props.currentBoardId !== card.board_id) {
          this.fetchBoardAndContents(card.board_id);
        }
      },
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
