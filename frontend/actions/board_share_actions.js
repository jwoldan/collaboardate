import * as BoardShareAPIUtil from '../util/board_share_api_util';

export const RECEIVE_SHARE = 'RECEIVE_SHARE';
export const REMOVE_SHARE = 'REMOVE_SHARE';

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
