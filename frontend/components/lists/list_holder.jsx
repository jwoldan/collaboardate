import React from 'react';
import { DropTarget } from 'react-dnd';
import ItemTypes from '../dnd/item_types';

import ListContainer from './list_container';

const listHolderTarget = {
  drop: (props, monitor) => {
    return { ord: props.list.ord };
  }
};

const collect = (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
});

const ListHolder = ({ list, disabled, connectDropTarget, isOver }) => {

  const overClass = isOver ? "over" : "";

  return connectDropTarget(
    <li className={ overClass }>
      <ListContainer list={ list } disabled= { disabled } />
    </li>
  );
};

export default DropTarget(
  ItemTypes.LIST,
  listHolderTarget,
  collect
)(ListHolder);
