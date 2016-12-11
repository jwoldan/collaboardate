import * as ListActions from '../actions/list_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  let newList;
  let newState;

  switch (action.type) {

    case ListActions.RECEIVE_LISTS:
      return Object.assign({}, action.lists);

    case ListActions.RECEIVE_LIST:
      const currentList = state[action.list.id];
      const currentOrd = currentList ? currentList.ord : null;
      const newOrd = action.list.ord;

      if(currentOrd !== null && currentOrd !== newOrd) {
        newState = updateOtherListOrds(state, currentOrd, newOrd);
      } else {
        newState = Object.assign({}, state);
      }

      newState[action.list.id] = action.list;
      return newState;

    case ListActions.REMOVE_LIST:
      newState = Object.assign({}, state);
      delete newState[action.list.id];
      return newState;

    default:
      return state;
  }
};

const updateOtherListOrds = (state, currentOrd, newOrd) => {
    const newState = {};

    if (currentOrd > newOrd) {
      Object.keys(state).forEach((key) => {
        const list = state[key];
        if (list.ord < currentOrd && list.ord >= newOrd) {
          newState[list.id] = Object.assign({}, list, { ord: list.ord + 1 });
        } else {
          newState[list.id] = list;
        }
      });
    } else if (currentOrd < newOrd) {
      Object.keys(state).forEach((key) => {
        const list = state[key];
        if(list.ord > currentOrd && list.ord <= newOrd) {
          newState[list.id] = Object.assign({}, list, { ord: list.ord - 1 });
        } else {
          newState[list.id] = list;
        }
      });
    }

    return newState;
};
