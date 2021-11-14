import React from 'react';
import { DropTarget } from 'react-dnd';
import ItemTypes from '../dnd/item_types';

import ListContainer from './list_container';

const listHolderTarget = {
  hover: (props, monitor) => {
    const sourceList = monitor.getItem().list;
    const targetList = props.list;
    if (sourceList.id !== targetList.id) {
      const updatedSourceList = Object.assign({}, sourceList, {
        ord: targetList.ord,
      });
      props.receiveList(updatedSourceList);
    }
  },
  drop: (props, monitor) => {
    const sourceList = monitor.getItem().list;
    const targetList = props.list;
    const updatedSourceList = Object.assign({}, sourceList, {
      ord: targetList.ord,
    });
    props.updateList(updatedSourceList);
  },
};

const collect = (connect) => ({
  connectDropTarget: connect.dropTarget(),
});

const ListHolder = ({ list, disabled, connectDropTarget }) =>
  connectDropTarget(
    <li>
      <ListContainer list={list} disabled={disabled} />
    </li>
  );

export default DropTarget(ItemTypes.LIST, listHolderTarget, collect)(ListHolder);
