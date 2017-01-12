export const RECEIVE_CURRENT_BOARD_ID = 'RECEIVE_CURRENT_BOARD_ID';

export const receiveCurrentBoardId = (boardId) => {
  return {
    type: RECEIVE_CURRENT_BOARD_ID,
    boardId,
  };
};
