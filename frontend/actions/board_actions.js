import { normalize } from 'normalizr';

import * as BoardAPIUtil from '../util/board_api_util';
import { boardListSchema, boardSchema } from '../schema';

export const RECEIVE_BOARDS = 'RECEIVE_BOARDS';
export const RECEIVE_BOARD = 'RECEIVE_BOARD';
export const REMOVE_BOARD = 'REMOVE_BOARD';

export const receiveBoards = boards => ({
  type: RECEIVE_BOARDS,
  payload: normalize(boards, boardListSchema),
});

export const receiveBoard = board => ({
  type: RECEIVE_BOARD,
  payload: normalize(board, boardSchema),
});

export const removeBoard = board => ({
  type: REMOVE_BOARD,
  payload: normalize(board, boardSchema),
});

export const createBoard = board => dispatch =>
  BoardAPIUtil.createBoard(board).then(newBoard => {
    dispatch(receiveBoard(newBoard));
    return newBoard;
  });

export const updateBoard = board => dispatch =>
  BoardAPIUtil.updateBoard(board).then(updatedBoard => {
    dispatch(receiveBoard(updatedBoard));
    return updatedBoard;
  });

export const fetchBoards = () => dispatch =>
  BoardAPIUtil.fetchBoards().then(boards => {
    dispatch(receiveBoards(boards));
    return boards;
  });

export const fetchBoard = id => dispatch =>
  BoardAPIUtil.fetchBoard(id).then(board => {
    dispatch(receiveBoard(board));
    return board;
  });

export const deleteBoard = id => dispatch =>
  BoardAPIUtil.deleteBoard(id).then(deletedBoard => {
    dispatch(removeBoard(deletedBoard));
    return deletedBoard;
  });
