import React from 'react';
import { Link } from 'react-router';

export default ({ board }) => {
  const linkClass = `board-link ${board.background}`;
  return (
    <li>
      <Link to={ `/b/${board.id}` } className={ linkClass }>
        <span className="board-color"></span>
        <span className="board-title">{ board.title }</span>
      </Link>
    </li>
  );
};
