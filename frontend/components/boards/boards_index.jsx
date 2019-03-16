import React from 'react';

import BoardsIndexList from './boards_index_list';

const BoardsIndex = ({ personalBoards, sharedBoards }) => (
  <section className="boards-index">
    <BoardsIndexList title="Personal Boards" boards={personalBoards} create={true} />
    <BoardsIndexList title="Shared Boards" boards={sharedBoards} />
  </section>
);

export default BoardsIndex;
