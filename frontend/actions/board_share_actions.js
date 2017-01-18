import * as BoardShareAPIUtil from '../util/board_share_api_util';

export const RECEIVE_SHARES = 'RECEIVE_SHARES';
export const RECEIVE_SHARE = 'RECEIVE_SHARE';
export const REMOVE_SHARE = 'REMOVE_SHARE';

export const receiveShares = (shares) => {
  return {
    type: RECEIVE_SHARES,
    shares,
  };
};

export const receiveShare = (share) => {
  return {
     type: RECEIVE_SHARE,
     share,
  };
};

export const removeShare = (share) => {
  return {
    type: REMOVE_SHARE,
    share,
  };
};

export const createShare = (share) => {
  return dispatch => {
    return BoardShareAPIUtil.createShare(share).then(
      newShare => {
        dispatch(receiveShare(newShare));
        return newShare;
      }
    );
  };
};

export const fetchShares = (boardId) => {
  return dispatch => {
    return BoardShareAPIUtil.fetchShares(boardId).then(
      shares => {
        dispatch(receiveShares(shares));
        return shares;
      }
    );
  };
};

export const deleteShare = (id) => {
  return dispatch => {
    return BoardShareAPIUtil.deleteShare(id).then(
      deletedShare => {
        dispatch(removeShare(deletedShare));
        return deletedShare;
      }
    );
  };
};
