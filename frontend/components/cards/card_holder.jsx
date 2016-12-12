import React from 'react';
import { connect } from 'react-redux';
import { DropTarget } from 'react-dnd';
import { findDOMNode } from 'react-dom';

import ItemTypes from '../dnd/item_types';
import { receiveCard, updateCard } from '../../actions/card_actions';

import Card from './card';

const mapDispatchToProps = (dispatch) => ({
  receiveCard: (card) => dispatch(receiveCard(card)),
  updateCard: (card) => dispatch(updateCard(card)),
});

const cardHolderTarget = {
  hover: (props, monitor, component) => {
    const sourceCard = monitor.getItem().card;
    const targetCard = props.card;
    if (sourceCard.id !== targetCard.id) {
      const updatedSourceCard = Object.assign({}, sourceCard, {
        ord: targetCard.ord,
        list_id: targetCard.list_id,
      });
      props.receiveCard(updatedSourceCard);
      props.updateCard(updatedSourceCard);
    }
  }
};

const collect = (dndConnect) => ({
    connectDropTarget: dndConnect.dropTarget(),
});

const CardHolder = ({ card, disabled, connectDropTarget }) => (
  connectDropTarget(
    <li>
      <Card card={ card } disabled= { disabled } />
    </li>
  )
);

export default connect(
  null,
  mapDispatchToProps
)(DropTarget(
  ItemTypes.CARD,
  cardHolderTarget,
  collect
)(CardHolder));
