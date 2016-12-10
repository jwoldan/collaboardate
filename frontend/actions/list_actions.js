import * as ListAPIUtil from '../util/list_api_util';

export const RECEIVE_LISTS = 'RECEIVE_LISTS';
export const RECEIVE_LIST = 'RECEIVE_LIST';
export const REMOVE_LIST = 'REMOVE_LIST';

export const receiveLists = (lists) => {
  return {
    type: RECEIVE_LISTS,
    lists,
  };
};

export const receiveList = (list) => {
  return {
    type: RECEIVE_LIST,
    list,
  };
};

export const removeList = (list) => {
  return {
    type: REMOVE_LIST,
    list,
  };
};

export const createList = (list) => {
  return dispatch => {
    return ListAPIUtil.createList(list).then(
      newList => {
        dispatch(receiveList(newList));
        return newList;
      }
    );
  };
};


export const updateList = (list) => {
  return dispatch => {
    return ListAPIUtil.updateList(list).then(
      updatedList => {
        dispatch(receiveList(updatedList));
        return updatedList;
      }
    );
  };
};

export const updateListOrd = (list) => {
  return dispatch => {
    return ListAPIUtil.updateList(list).then(
      updatedList => {
        dispatch(fetchLists(updatedList.board_id));
        return updatedList;
      }
    );
  };
};

export const fetchLists = (boardId) => {
  return dispatch => {
    return ListAPIUtil.fetchLists(boardId).then(
      lists => {
        dispatch(receiveLists(lists));
        return lists;
      }
    );
  };
};

export const fetchList = (id) => {
  return dispatch => {
    return ListAPIUtil.fetchList(id).then(
      list => {
        dispatch(receiveList(list));
        return list;
      }
    );
  };
};

export const deleteList = (id) => {
  return dispatch => {
    return ListAPIUtil.deleteList(id).then(
      deletedList => {
        dispatch(removeList(deletedList));
        dispatch(fetchLists(deletedList.board_id));
        return deletedList;
      }
    );
  };
};
