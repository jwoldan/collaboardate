
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
