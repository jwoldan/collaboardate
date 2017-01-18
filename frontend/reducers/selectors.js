
/* Menus */

export const menuIsOpen = ({ menuStatus }) => (
  Object.keys(menuStatus).map((key) => menuStatus[key])
    .reduce((a, b) => a || b)
);

/* Profile */

export const selectProfile = (state, username) => {
  const { currentUser, profile } = state;
  if (currentUser.username === username) {
    return currentUser;
  } else if (profile.username === username) {
    return profile;
  } else return {};
};

/* Boards */

export const selectPersonalBoards = ({ boards, currentUser }) => (
  Object.keys(boards)
    .map(key => boards[key])
    .filter(
      (board) => board.creator.id === currentUser.id
    )
);

export const selectSharedBoards = ({ boards, currentUser }) => {
  const boardArray = Object.keys(boards).map(key => boards[key]);
  return boardArray.filter((board) => {
    return (
      board.creator.id !== currentUser.id
    );
  });
};

export const selectBoard = ({ boards, cards, cardDetail }, id, cardId) => {
  if(boards[id]) {
    return boards[id];
  // optional cardId value can be used when on card detail page
  } else if(cardId) {
      if(cards[cardId] && boards[cards[cardId].board_id]) {
        return boards[cards[cardId].board_id];
      } else if (cardDetail.id === cardId && boards[cardDetail.board_id]) {
        return boards[cardDetail.board_id];
      }
  }
  return {};
};

export const selectBoardUsers = ({ boards, shares, currentUser }, boardId) => {
  let users = [];
  const board = boards[boardId];

  if(board) users.push(board.creator);

  const otherUsers = Object.keys(shares).map((key) => shares[key].sharee);
  users = users.concat(otherUsers);

  return users;
};

export const checkDisabled = (board, currentUser) => {
  if(board && board.creator && currentUser) {
    if (board.creator.id === currentUser.id) return false;
    if (board.users) {
      return !checkSharedUser(board, currentUser);
    }
  }
  return true;
};

export const checkSharedUser = (shares, currentUser) => {
  if (shares && currentUser) {
    const userIds = Object.keys(shares).map((key)=> shares[key].sharee.id);
    if (userIds.includes(currentUser.id)) return true;
  }
  return false;
};

export const selectShareId = (shares, currentUser) => {
  if (shares && currentUser) {
    const shareArray = Object.keys(shares).map((key) => shares[key]);
    for(let i = 0; i < shareArray.length; i++) {
      if (shareArray[i].sharee.id === currentUser.id) {
        return shareArray[i].id;
      }
    }
  }
  return null;
};

/* Lists */

export const selectLists = ({ lists }, boardId)  => {
  return Object.keys(lists).map((key) => (
    lists[key]
  )).sort(ordSort);
};

export const selectListByCardId = ({ lists, cards }, cardId) => {
  if(cards[cardId]) {
    return lists[cards[cardId].list_id];
  } else {
    return {};
  }
};

/* Cards */

export const selectCards = ({ cards }, listId) => {
  return Object.keys(cards).map((key) => (
    cards[key]
  )).filter((card) => card.list_id === listId)
  .sort(ordSort);
};

/* Comments */

export const selectComments = ({ cardDetail }) => {
  if (cardDetail && cardDetail.comments) {
    return Object.keys(cardDetail.comments).map((key) => (
      cardDetail.comments[key]
    )).sort((a, b) => {
      if (a.created_at_i > b.created_at_i) {
        return -1;
      } else if (a.created_at_i < b.created_at_i) {
        return 1;
      } else {
        return 0;
      }
    });
  } else {
    return [];
  }
};

const ordSort = (a, b) => {
  if (a.ord < b.ord) {
    return -1;
  } else if (a.ord > b.ord){
    return 1;
  } else {
    return 0;
  }
};
