import React from 'react';
import { DragSource } from 'react-dnd';
import ItemTypes from '../dnd/item_types';

import ListMenuContainer from './list_menu_container';

const listSource = {
  beginDrag: (props) => ({}),
  endDrag: (props, monitor) => {
    if (!monitor.didDrop()) return;
    const ord = monitor.getDropResult().ord;
    const updatedList = Object.assign({}, props.list, { ord });
    props.updateListOrd(updatedList);
  }
};

const collect = (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
});

const List = ({ list, disabled, connectDragSource, isDragging }) => (
  connectDragSource(
    <section className="list">
      <h3 className="list-title">{ list.title }</h3>
      <ListMenuContainer list={ list } disabled={ disabled } />
    </section>
  )
);

export default DragSource(ItemTypes.LIST, listSource, collect)(List);
