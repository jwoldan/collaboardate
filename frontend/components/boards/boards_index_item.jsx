import React from 'react';
import { Link } from 'react-router';

export default ({ board }) => {
  return (
    <li className="board">
        <Link to={`/b/${board.id}`}>{ board.title }</Link>
    </li>
  );
};
