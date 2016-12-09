
export const RECEIVE_CURRENT_BOARD_ID = 'RECEIVE_CURRENT_BOARD_ID';

export const receiveCurrentBoardId = (id) => {
  return {
    type: RECEIVE_CURRENT_BOARD_ID,
    id,
  };
};
