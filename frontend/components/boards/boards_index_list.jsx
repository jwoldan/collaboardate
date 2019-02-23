import React from 'react';

import BoardsIndexItem from './boards_index_item';
import BoardsIndexCreateContainer from './boards_index_create_container';

export default ({ title, boards, create }) => {
  if (boards.length > 0 || create) {
    return (
      <section>
        <h2>{title}</h2>
        <ul className="boards-list">
          {boards.map(board => (
            <BoardsIndexItem key={board.id} board={board} />
          ))}
          {create ? <BoardsIndexCreateContainer /> : ''}
        </ul>
      </section>
    );
  } else {
    return null;
  }
};
