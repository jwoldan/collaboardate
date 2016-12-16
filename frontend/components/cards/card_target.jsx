import React from 'react';
import { connect } from 'react-redux';
import { DropTarget } from 'react-dnd';

import ItemTypes from '../dnd/item_types';
import { receiveCard, updateCard } from '../../actions/card_actions';

const mapDispatchToProps = (dispatch) => ({
  receiveCard: (card) => dispatch(receiveCard(card)),
  updateCard: (card) => dispatch(updateCard(card)),
});

const cardHolderTarget = {
  hover: (props, monitor) => {
    const sourceCard = monitor.getItem().card;
    const cardIds = props.cards.map((card) => card.id);
    if (!cardIds.includes(sourceCard.id)) {
      const updatedSourceCard = Object.assign({}, sourceCard, {
        ord: props.cards.length,
        list_id: props.listId,
      });
      props.receiveCard(updatedSourceCard);
    }
  },
  drop: (props, monitor) => {
    const sourceCard = monitor.getItem().card;
    if(sourceCard.list_id !== props.listId) {
      const updatedSourceCard = Object.assign({}, sourceCard, {
        ord: props.cards.length - 1,
        list_id: props.listId,
      });
      props.updateCard(updatedSourceCard);
    }
  },
};

const collect = (dndConnect) => ({
    connectDropTarget: dndConnect.dropTarget(),
});

const CardTarget = ({ connectDropTarget, children }) => {

  return connectDropTarget(
    <li className="card-target">
      { children }
    </li>
  );

};

export default connect(
  null,
  mapDispatchToProps
  )(DropTarget(
    ItemTypes.CARD,
    cardHolderTarget,
    collect
)(CardTarget));
