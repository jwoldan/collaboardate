import React from 'react';

import BoardsIndexList from './boards_index_list';

class BoardsIndex extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { personalBoards, sharedBoards } = this.props;
    return (
      <section className="boards-index">
        <BoardsIndexList title="Personal Boards" boards={personalBoards} create={true} />
        <BoardsIndexList title="Shared Boards" boards={sharedBoards} />
      </section>
    );
  }
}

export default BoardsIndex;
