
/* Menus */

export const menuIsOpen = ({ menuStatus }) => (
  Object.keys(menuStatus).map((key) => menuStatus[key])
    .reduce((a, b) => a || b)
);

/* Boards */

export const selectPersonalBoards = ({ boards }) => (
  Object.keys(boards).map(key => boards[key])
);

export const selectBoard = ({ boards, cardDetail }, id, cardId) => {
  if(boards[id]) {
    return boards[id];
  // optional cardId value can be used when on card detail page
  } else if(cardId && cardDetail.id === parseInt(cardId)) {
    return boards[cardDetail.board_id];
  } else {
    return {};
  }
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

const ordSort = (a, b) => {
  if(a.ord < b.ord) {
    return -1;
  } else if (a.ord > b.ord){
    return 1;
  } else {
    return 0;
  }
};
