
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
  return Object.keys(lists).map((key) => (
    lists[key]
  )).sort((a, b) => {
    const aOrd = a.tempOrd ? a.tempOrd : a.ord;
    const bOrd = b.tempOrd ? b.tempOrd : b.ord;
    if(aOrd < bOrd) {
      return -1;
    } else if (aOrd > bOrd){
      return 1;
    } else {
      return 0;
    }
  });
};
