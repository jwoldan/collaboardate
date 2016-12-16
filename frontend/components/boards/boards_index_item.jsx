import React from 'react';
import { Link } from 'react-router';

export default ({ board }) => {

  const boardItemClass = `board ${board.background}`;

  return (
    <li className={ boardItemClass }>
        <Link to={`/b/${board.id}`}>{ board.title }</Link>
    </li>
  );
};
