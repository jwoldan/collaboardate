import React from 'react';

import CardQuickEditContainer from './card_quick_edit_container';

const Card = ({ card, disabled }) => {

  return (
    <section className="card">
      <h4 className="card-title">
        <section className="card-summary">{ card.title }</section>
      </h4>
      <CardQuickEditContainer card={ card } />
    </section>
  );
};

export default Card;
