import React, { Suspense } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { isNumber } from 'lodash';

const CardDetailContainer = React.lazy(() =>
  import(/* webpackChunkName: "CardDetailContainer" */ '../cards/card_detail_container')
);
const CardEditModal = React.lazy(() =>
  import(/* webpackChunkName: "CardEditModal" */ '../cards/card_edit_modal')
);
import BoardNavigation from './board_navigation';
const ListHolderContainer = React.lazy(() =>
  import(/* webpackChunkName: "ListHolderContainer" */ '../lists/list_holder_container')
);
import ListCreate from '../lists/list_create';

class Board extends React.Component {
  componentDidMount() {
    const { boardId, cardId } = this.props;

    if (isNumber(boardId)) {
      this.fetchBoardAndContents(boardId);
    } else {
      this.fetchCardDetailAndBoard(cardId);
    }
  }

  componentWillReceiveProps(newProps) {
    const oldProps = this.props;
    const oldBoardId = oldProps.boardId;
    const oldCardId = oldProps.cardId;
    const newBoardId = newProps.boardId;
    const newCardId = newProps.cardId;

    if (
      oldBoardId !== newBoardId &&
      this.props.currentBoardId !== newBoardId &&
      isNumber(newBoardId)
    ) {
      this.fetchBoardAndContents(newBoardId);
    } else if (
      oldCardId !== newCardId &&
      this.props.cardDetail.id !== newCardId &&
      newProps.cardDetail.id !== newCardId &&
      isNumber(newCardId)
    ) {
      this.fetchCardDetailAndBoard(newCardId);
    }
  }

  componentWillUnmount() {
    this.props.receiveShares({});
    this.props.receiveCurrentBoardId(null);
  }

  fetchBoardAndContents(boardId) {
    this.props.receiveShares({});
    this.props.receiveCurrentBoardId(boardId);
    return this.props.fetchBoard(boardId).then(
      (board) => this.props.fetchShares(board.id),
      (error) => this.props.navigate('/')
    );
  }

  fetchCardDetailAndBoard(cardId) {
    return this.props.fetchCardDetail(cardId).then(
      (card) => {
        if (this.props.currentBoardId !== card.board_id) {
          this.fetchBoardAndContents(card.board_id);
        }
      },
      (error) => this.props.navigate('/')
    );
  }

  render() {
    const { currentUser, board, updateBoard, disabled } = this.props;
    const lists = board.lists;
    const navDisabled = disabled || currentUser.id !== board.creator.id;

    return (
      <DndProvider backend={HTML5Backend}>
        <section className="current-board">
          <Suspense fallback={null}>
            <CardDetailContainer disabled={disabled} />
            <CardEditModal />

            <BoardNavigation board={board} updateBoard={updateBoard} disabled={navDisabled} />
            <ul className="lists clearfix">
              {lists &&
                lists.map((list) => (
                  <ListHolderContainer key={list.id} list={list} disabled={disabled} />
                ))}
              <ListCreate disabled={disabled} />
            </ul>
          </Suspense>
        </section>
      </DndProvider>
    );
  }
}

export default Board;
