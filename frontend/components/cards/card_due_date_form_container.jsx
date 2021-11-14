import React from 'react';
import { useDispatch } from 'react-redux';

import CardDueDateForm from './card_due_date_form';

import { updateCard } from '../../actions/card_actions';

const CardDueDateFormContainer = (props) => {
  const dispatch = useDispatch();

  return (
    <CardDueDateForm
      updateCard={(card) => dispatch(updateCard(card))}
      {...props}
    />
  );
};

export default CardDueDateFormContainer;
