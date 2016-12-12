import React from 'react';

const Card = ({ card, disabled }) => {

  return (
    <section className="card">
      <h4 className="card-title">
        <section className="card-summary">{ card.title }</section>
      </h4>
    </section>
  );
};

export default Card;
