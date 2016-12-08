
export const selectPersonalBoards = ({ boards }) => (
  Object.keys(boards).map(key => boards[key])
);
