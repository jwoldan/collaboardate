import { denormalize } from 'normalizr';

import { boardSchema } from '../schema';

/* Menus */

export const menuIsOpen = ({ menuStatus }) =>
  Object.keys(menuStatus)
    .map(key => menuStatus[key])
    .reduce((a, b) => a || b);

/* Profile */

export const selectProfile = (state, username) => {
  const { currentUser, profile } = state;
  if (currentUser.username === username) {
    return currentUser;
  }
  if (profile.username === username) {
    return profile;
  }
  return {};
};

/* Boards */

const denormalizeBoard = (board, entities) => denormalize(board, boardSchema, entities);

export const selectPersonalBoards = ({ entities, currentUser }) => {
  const { boards } = entities;
  return Object.keys(boards)
    .map(key => denormalizeBoard(boards[key], entities))
    .filter(board => board.creator.id === currentUser.id);
};

export const selectSharedBoards = ({ entities, currentUser }) => {
  const { boards } = entities;
  const boardArray = Object.keys(boards).map(key => denormalizeBoard(boards[key], entities));
  return boardArray.filter(board => board.creator.id !== currentUser.id);
};

export const selectBoard = ({ entities, cardDetail }, id, cardId) => {
  const { boards, cards } = entities;
  const boardId =
    id ||
    (cards[cardId] && cards[cardId].board_id) ||
    (cardDetail.id === cardId && cardDetail.board_id);

  if (boards && boards[boardId]) {
    return denormalizeBoard(entities.boards[boardId], entities);
  }

  return {};
};

export const selectBoardUsers = ({ entities: { boards }, shares }, boardId) => {
  let users = [];
  const board = boards[boardId];

  if (board) users.push(board.creator);

  const otherUsers = Object.keys(shares).map(key => shares[key].sharee);
  users = users.concat(otherUsers);

  return users;
};

export const checkSharedUser = (shares, currentUser) => {
  if (shares && currentUser) {
    const userIds = Object.keys(shares).map(key => shares[key].sharee.id);
    if (userIds.includes(currentUser.id)) return true;
  }
  return false;
};

export const checkDisabled = (board, currentUser) => {
  if (board && board.creator && currentUser) {
    if (board.creator.id === currentUser.id) return false;
    if (board.users) {
      return !checkSharedUser(board, currentUser);
    }
  }
  return true;
};

export const selectShareId = (shares, currentUser) => {
  if (shares && currentUser) {
    const shareArray = Object.keys(shares).map(key => shares[key]);
    for (let i = 0; i < shareArray.length; i += 1) {
      if (shareArray[i].sharee.id === currentUser.id) {
        return shareArray[i].id;
      }
    }
  }
  return null;
};

/* Lists */

export const selectListByCardId = ({ entities: { cards, lists } }, cardId) => {
  if (cards[cardId]) {
    return lists[cards[cardId].list_id];
  }
  return {};
};

/* Cards */

const ordSort = (a, b) => {
  if (a.ord < b.ord) {
    return -1;
  }
  if (a.ord > b.ord) {
    return 1;
  }
  return 0;
};

export const selectCards = ({ entities: { cards } }, listId) =>
  Object.keys(cards)
    .map(key => cards[key])
    .filter(card => card.list_id === listId)
    .sort(ordSort);

/* Comments */

export const selectComments = ({ cardDetail }) => {
  if (cardDetail && cardDetail.comments) {
    return Object.keys(cardDetail.comments)
      .map(key => cardDetail.comments[key])
      .sort((a, b) => {
        if (a.created_at_i > b.created_at_i) {
          return -1;
        }
        if (a.created_at_i < b.created_at_i) {
          return 1;
        }
        return 0;
      });
  }
  return [];
};
