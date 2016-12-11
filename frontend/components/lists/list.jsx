import React from 'react';
import { DragSource } from 'react-dnd';
import ItemTypes from '../dnd/item_types';

import ListMenuContainer from './list_menu_container';

const listSource = {
  beginDrag: (props) => ({
    list: props.list
  }),
  isDragging: (props, monitor) => (
    props.list.id === monitor.getItem().list.id
  ),
};

const collect = (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
});

const List = ({ list, disabled, connectDragSource, isDragging }) => {
  const listClass = isDragging ? "list dragging" : "list";

  return connectDragSource(
    <section className={ listClass }>
      <h3 className="list-title">{ list.title }</h3>
      <ListMenuContainer list={ list } disabled={ disabled } />
    </section>
  );
};

export default DragSource(ItemTypes.LIST, listSource, collect)(List);
