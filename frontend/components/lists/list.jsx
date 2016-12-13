import React from 'react';
import { DragSource } from 'react-dnd';
import ItemTypes from '../dnd/item_types';

import ListTitleEditableContainer from './list_title_editable_container';
import ListMenuContainer from './list_menu_container';
import CardHolder from '../cards/card_holder';
import CardTarget from '../cards/card_target';
import CardCreateContainer from '../cards/card_create_container';

const listSource = {
  beginDrag: (props) => ({
    list: props.list
  }),
  canDrag: ({ disabled }) => (
    !disabled
  ),
  isDragging: (props, monitor) => (
    props.list.id === monitor.getItem().list.id
  ),
};

const collect = (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
});

const List = ({ list, cards, disabled, connectDragSource, isDragging }) => {
  const listClass = isDragging ? "list dragging" : "list";

  return connectDragSource(
    <section className={ listClass }>
      <ListTitleEditableContainer list={ list } disabled= { disabled }/>
      <ListMenuContainer list={ list } disabled={ disabled } />

      <ul className="cards">
        { cards.map((card) => (
          <CardHolder key={ card.id } card={ card } disabled={ disabled } />
        ))}
        <CardTarget listId= {list.id} cards={ cards }>
          <CardCreateContainer list={ list } disabled={ disabled } />
        </CardTarget>
      </ul>
    </section>
  );
};

export default DragSource(
  ItemTypes.LIST,
  listSource,
  collect
)(List);
