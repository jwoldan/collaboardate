import React from 'react';
import { DragSource } from 'react-dnd';
import ItemTypes from '../dnd/item_types';

import DynamicEditable from '../general/dynamic_editable';
import CardQuickEditContainer from './card_quick_edit_container';
import CardDetailContainer from './card_detail_container';

const cardSource = {
  beginDrag: (props) => ({
    card: props.card

  }),
  isDragging: (props, monitor) => (
    props.card.id === monitor.getItem().card.id
  ),
};

const collect = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
});

class Card extends DynamicEditable {

  constructor() {
    super();

    this.state = {
      active: false,
    };

    this.activate = this.activate.bind(this);
    this.setCardDetail = this.setCardDetail.bind(this);
  }

  activate(active) {
    return e => this.setState({ active });
  }

  setCardDetail() {
    this.props.receiveCardDetail(this.props.card);
  }

  render() {
    const { card, disabled, connectDragSource,  isDragging } = this.props;
    const { active } = this.state;
    let cardClass = isDragging ? "card dragging" : "card";
    if (active) cardClass += " active";

    return connectDragSource(
      <section
        className={ cardClass }
        onMouseEnter={ this.activate(true) }
        onMouseLeave={ this.activate(false) }
        onClick={ this.setCardDetail }>
        <CardQuickEditContainer card={ card } disabled={ disabled } />
        <h4 className="card-title">
          <section className="card-summary">{ card.title }</section>
        </h4>
      </section>
    );

  }
}

export default DragSource(
  ItemTypes.CARD,
  cardSource,
  collect
)(Card);
