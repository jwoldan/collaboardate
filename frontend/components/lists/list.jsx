import React from 'react';

import ListMenuContainer from './list_menu_container';

export default ({ list, disabled }) => (
  <li className="list">
    <h3 className="list-title">{ list.title }</h3>
    <ListMenuContainer list={ list } disabled={ disabled } />
  </li>
);
