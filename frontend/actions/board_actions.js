import * as BoardAPIUtil from '../util/board_api_util';

export const RECEIVE_BOARDS = 'RECEIVE_BOARDS';
export const RECEIVE_BOARD = 'RECEIVE_BOARD';
export const REMOVE_BOARD = 'REMOVE_BOARD';
export const RECEIVE_CURRENT_BOARD = 'RECEIVE_CURRENT_BOARD';

export const receiveBoards = (boards) => {
  return {
    type: RECEIVE_BOARDS,
    boards,
  };
};

export const receiveBoard = (board) => {
  return {
    type: RECEIVE_BOARD,
    board,
  };
};

export const removeBoard = (board) => {
  return {
    type: REMOVE_BOARD,
    board,
  };
};

export const receiveCurrentBoard = (board) => {
  return {
    type: RECEIVE_CURRENT_BOARD,
    board,
  };
};

export const createBoard = (board) => {
  return dispatch => {
    return BoardAPIUtil.createBoard(board).then(
      newBoard => {
        dispatch(receiveBoard(newBoard));
        return newBoard;
      }
    );
  };
};


export const updateBoard = (board) => {
  return dispatch => {
    return BoardAPIUtil.updateBoard(board).then(
      updatedBoard => {
        dispatch(receiveBoard(updatedBoard));
        return updatedBoard;
      }
    );
  };
};

export const fetchBoards = () => {
  return dispatch => {
    return BoardAPIUtil.fetchBoards().then(
      boards => {
        dispatch(receiveBoards(boards));
        return boards;
      }
    );
  };
};

export const fetchBoard = (id) => {
  return dispatch => {
    return BoardAPIUtil.fetchBoard(id).then(
      board => {
        dispatch(receiveCurrentBoard(board));
        return board;
      }
    );
  };
};

export const deleteBoard = (id) => {
  return dispatch => {
    return BoardAPIUtil.deleteBoard(id).then(
      deletedBoard => {
        dispatch(removeBoard(deletedBoard));
        return deletedBoard;
      }
    );
  };
};
