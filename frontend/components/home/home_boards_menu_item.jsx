import React from 'react';
import { Link } from 'react-router-dom';

export default ({ board, toggle }) => {
  const linkClass = `board-link ${board.background}`;
  return (
    <li>
      <Link to={ `/b/${board.id}` } className={ linkClass } onClick= { toggle }>
        <span className="board-color"></span>
        <span className="board-title">{ board.title }</span>
      </Link>
    </li>
  );
};
