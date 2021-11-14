import { unset, update } from 'lodash/fp';

import * as CardActions from '../actions/card_actions';
import * as BoardActions from '../actions/board_actions';
import * as ListActions from '../actions/list_actions';
import { reorderNormalizedChildren } from '../util/ordering_util';
import { boardSchema, listSchema } from '../schema';

const initialState = {
  cards: {},
  boards: {},
  lists: {},
};

export default (state = initialState, action = {}) => {
  Object.freeze(state);

  /* eslint-disable default-case */
  switch (action.type) {
    case CardActions.RECEIVE_CARD: {
      const cardId = action.payload.result;
      const newCard = action.payload.entities.cards[cardId];
      const oldCard = state.cards[cardId];

      if (oldCard && oldCard.list_id !== newCard.list_id) {
        let updatedState = reorderNormalizedChildren({
          entities: state,
          parentKey: 'lists',
          parentId: newCard.list_id,
          parentSchema: listSchema,
          childKey: 'cards',
          newChild: newCard,
        });

        updatedState = reorderNormalizedChildren({
          entities: updatedState,
          parentKey: 'lists',
          parentId: oldCard.list_id,
          parentSchema: listSchema,
          childKey: 'cards',
          oldChild: oldCard,
        });

        return updatedState;
      }

      if (oldCard && oldCard.ord === newCard.ord) {
        break;
      }

      return reorderNormalizedChildren({
        entities: state,
        parentKey: 'lists',
        parentId: newCard.list_id,
        parentSchema: listSchema,
        childKey: 'cards',
        oldChild: oldCard,
        newChild: newCard,
      });
    }

    case CardActions.REMOVE_CARD: {
      const cardId = action.payload.result;
      const oldCard = state.cards[cardId];
      const updatedState = reorderNormalizedChildren({
        entities: state,
        parentKey: 'lists',
        parentId: oldCard.list_id,
        parentSchema: listSchema,
        childKey: 'cards',
        oldChild: oldCard,
      });

      return unset(['cards', action.payload.result])(updatedState);
    }

    case CardActions.INCREMENT_COMMENT_COUNT: {
      const { cardId } = action;
      if (!state.cards[cardId]) break;

      return update(['cards', cardId, 'comment_count'], (count) => count + 1)(state);
    }

    case CardActions.DECREMENT_COMMENT_COUNT: {
      const { cardId } = action;
      if (!state.cards[cardId]) break;

      return update(['cards', cardId, 'comment_count'], (count) => count - 1)(state);
    }

    case BoardActions.REMOVE_BOARD: {
      return unset(['boards', action.payload.result])(state);
    }

    case ListActions.RECEIVE_LIST: {
      const listId = action.payload.result;
      const newList = action.payload.entities.lists[listId];
      const oldList = state.lists[listId];

      if (oldList && oldList.ord === newList.ord) {
        break;
      }

      return reorderNormalizedChildren({
        entities: state,
        parentKey: 'boards',
        parentId: newList.board_id,
        parentSchema: boardSchema,
        childKey: 'lists',
        oldChild: oldList,
        newChild: newList,
      });
    }

    case ListActions.REMOVE_LIST: {
      const listId = action.payload.result;
      const oldList = state.lists[listId];
      const updatedState = reorderNormalizedChildren({
        entities: state,
        parentKey: 'boards',
        parentId: oldList.board_id,
        parentSchema: boardSchema,
        childKey: 'lists',
        oldChild: oldList,
      });

      return unset(['lists', action.payload.result])(updatedState);
    }
  }

  if (action.payload && action.payload.entities) {
    const newState = { ...state };

    Object.keys(action.payload.entities).forEach((key) => {
      newState[key] = { ...newState[key], ...action.payload.entities[key] };
    });
    return newState;
  }

  return state;
};
