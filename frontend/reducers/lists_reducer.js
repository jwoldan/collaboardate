import * as ListActions from '../actions/list_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  let newList;

  switch (action.type) {

    case ListActions.RECEIVE_LISTS:
      return Object.assign({}, action.lists);

    case ListActions.RECEIVE_LIST:
      newList = action.list;
      return Object.assign({}, state, {
        [newList.id]: newList,
      });

    case ListActions.REMOVE_LIST:
      const newState = Object.assign({}, state);
      delete newState[action.list.id];
      return newState;

    default:
      return state;
  }
};
