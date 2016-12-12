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
    const updatedSourceCard = Object.assign({}, sourceCard, {
      ord: 0,
      list_id: props.list.id,
    });
    props.receiveCard(updatedSourceCard);
    props.updateCard(updatedSourceCard);
  },
};

const collect = (dndConnect) => ({
    connectDropTarget: dndConnect.dropTarget(),
});

const CardTarget = ({ active, connectDropTarget, children }) => {
  if(active) {
    return connectDropTarget(
      <li className="card-target">
        { children }
      </li>
    );
  } else {
    return (
      <li className="card-target">
        { children }
      </li>
    );
  }

};

export default connect(
  null,
  mapDispatchToProps
)(DropTarget(
  ItemTypes.CARD,
  cardHolderTarget,
  collect
)(CardTarget));
