
export const selectPersonalBoards = ({ boards }) => (
  Object.keys(boards).map(key => boards[key])
);

export const selectBoard = ({ boards }, id) => {
  if(boards[id]) {
    return boards[id];
  } else {
    return {};
  }
};

export const selectLists = ({ lists }, boardId)  => {
  const listsArray = [];
  Object.keys(lists).forEach((key) => {
    const list = lists[key];
    if (list.board_id === parseInt(boardId)) {
      listsArray[list.ord] = lists[key];
    }
  });
  return listsArray;
};
