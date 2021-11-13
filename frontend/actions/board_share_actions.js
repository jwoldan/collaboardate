import * as BoardShareAPIUtil from '../util/board_share_api_util';

export const RECEIVE_SHARES = 'RECEIVE_SHARES';
export const RECEIVE_SHARE = 'RECEIVE_SHARE';
export const REMOVE_SHARE = 'REMOVE_SHARE';

export const receiveShares = shares => ({
  type: RECEIVE_SHARES,
  shares,
});

export const receiveShare = share => ({
  type: RECEIVE_SHARE,
  share,
});

export const removeShare = share => ({
  type: REMOVE_SHARE,
  share,
});

export const createShare = share => dispatch =>
  BoardShareAPIUtil.createShare(share).then(newShare => {
    dispatch(receiveShare(newShare));
    return newShare;
  });

export const fetchShares = boardId => dispatch =>
  BoardShareAPIUtil.fetchShares(boardId).then(shares => {
    dispatch(receiveShares(shares));
    return shares;
  });

export const deleteShare = id => dispatch =>
  BoardShareAPIUtil.deleteShare(id).then(deletedShare => {
    dispatch(removeShare(deletedShare));
    return deletedShare;
  });
