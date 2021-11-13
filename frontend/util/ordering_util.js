import { flow, map, set, sortBy } from 'lodash/fp';
import { denormalize, normalize } from 'normalizr';

export const reorder = ({ orderables, orderable, oldOrd = null, newOrd = null }) => {
  let updatedOrderables = [...orderables];
  const fromOrd = oldOrd !== null ? oldOrd : orderables.length;
  const toOrd = newOrd !== null ? newOrd : orderables.length;

  if (oldOrd === null) {
    updatedOrderables.push(orderable);
  } else if (newOrd === null) {
    updatedOrderables = updatedOrderables.filter(anOrderable => anOrderable.id !== orderable.id);
  }

  return flow(
    map(anOrderable => {
      if (anOrderable.id === orderable.id) {
        return orderable;
      }
      if (anOrderable.ord < fromOrd && anOrderable.ord >= toOrd) {
        return set('ord', anOrderable.ord + 1, anOrderable);
      }
      if (anOrderable.ord > fromOrd && anOrderable.ord <= toOrd) {
        return set('ord', anOrderable.ord - 1, anOrderable);
      }

      return anOrderable;
    }),
    sortBy('ord')
  )(updatedOrderables);
};

export const reorderNormalizedChildren = ({
  entities,
  parentKey,
  parentId,
  parentSchema,
  childKey,
  oldChild,
  newChild,
}) => {
  const normalizedParent = entities[parentKey][parentId];

  const parent = denormalize(normalizedParent, parentSchema, entities);
  const updatedChildren = reorder({
    orderables: parent[childKey],
    orderable: newChild || oldChild,
    oldOrd: oldChild && oldChild.ord,
    newOrd: newChild && newChild.ord,
  });
  const updatedParent = set(childKey, updatedChildren, parent);

  const { entities: newEntities } = normalize(updatedParent, parentSchema);
  const newParentEntities = { ...entities[parentKey], ...newEntities[parentKey] };
  const newChildEntities = { ...entities[childKey], ...newEntities[childKey] };

  return {
    ...entities,
    [parentKey]: newParentEntities,
    [childKey]: newChildEntities,
  };
};
