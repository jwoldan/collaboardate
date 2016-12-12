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
      newState = Object.assign({}, state,
        updateOtherListOrds(state, action.list.ord, null)
      );
      delete newState[action.list.id];
      return newState;

    default:
      return state;
  }
};

const updateOtherListOrds = (state, currentOrd, newOrd) => {
    const newState = {};

    const lists = Object.keys(state).map((key) => state[key]);

    // Initial value of -1 would only be returned if no cards exist
    const nextOrd = lists.reduce(
      (x, y) => ((x.ord > y.ord) ? x.ord : y.ord),
      -1
    ) + 1;

    if (newOrd === null) newOrd = nextOrd;
    if (currentOrd === null) currentOrd = nextOrd;

    if (currentOrd > newOrd) {
      lists.forEach((list) => {
        if (list.ord < currentOrd && list.ord >= newOrd) {
          newState[list.id] = Object.assign({}, list, { ord: list.ord + 1 });
        } else {
          newState[list.id] = list;
        }
      });
    } else if (currentOrd < newOrd) {
      lists.forEach((list) => {
        if(list.ord > currentOrd && list.ord <= newOrd) {
          newState[list.id] = Object.assign({}, list, { ord: list.ord - 1 });
        } else {
          newState[list.id] = list;
        }
      });
    }

    return newState;
};
