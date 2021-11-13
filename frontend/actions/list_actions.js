import { normalize } from 'normalizr';

import * as ListAPIUtil from '../util/list_api_util';
import { listListSchema, listSchema } from '../schema';

export const RECEIVE_LISTS = 'RECEIVE_LISTS';
export const RECEIVE_LIST = 'RECEIVE_LIST';
export const REMOVE_LIST = 'REMOVE_LIST';

export const receiveLists = lists => ({
  type: RECEIVE_LISTS,
  payload: normalize(lists, listListSchema),
});

export const receiveList = list => ({
  type: RECEIVE_LIST,
  payload: normalize(list, listSchema),
});

export const removeList = list => ({
  type: REMOVE_LIST,
  payload: normalize(list, listSchema),
});

export const createList = list => dispatch =>
  ListAPIUtil.createList(list).then(newList => {
    dispatch(receiveList(newList));
    return newList;
  });

export const updateList = list => dispatch =>
  ListAPIUtil.updateList(list).then(updatedList => {
    dispatch(receiveList(updatedList));
    return updatedList;
  });

export const fetchLists = boardId => dispatch =>
  ListAPIUtil.fetchLists(boardId).then(lists => {
    dispatch(receiveLists(lists));
    return lists;
  });

export const fetchList = id => dispatch =>
  ListAPIUtil.fetchList(id).then(list => {
    dispatch(receiveList(list));
    return list;
  });

export const deleteList = id => dispatch =>
  ListAPIUtil.deleteList(id).then(deletedList => {
    dispatch(removeList(deletedList));
    return deletedList;
  });
