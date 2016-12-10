import React from 'react';

import BoardsIndexItem from './boards_index_item';
import BoardsIndexCreateContainer from './boards_index_create_container';

class BoardsIndex extends React.Component {

  constructor() {
    super();
  }

  render() {
    const { boards } = this.props;
    return (
      <section className="boards-index">
        <h2>Personal Boards</h2>
        <ul className="boards-list personal-boards">
          { boards.map((board) => (
            <BoardsIndexItem key={ board.id } board={ board } />
          ))}
          <BoardsIndexCreateContainer />
        </ul>
      </section>
    );
  }
}

export default BoardsIndex;
