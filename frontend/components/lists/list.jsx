import React from 'react';

export default ({ list }) => (
  <li className="list">
    <h3 className="list-title">{ list.title }</h3>
    <span className="icon icon-more-black icon-list-menu" />
  </li>
);
