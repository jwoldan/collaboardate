import React from 'react';

import BoardVisibilityOptions from './board_visibility_options';

class BoardVisibilityUpdate extends React.Component {
  updateVisibility = e => {
    const {
      match: {
        params: { boardId },
      },
    } = this.props;
    const update = { id: boardId, visibility: e.currentTarget.dataset.value };
    this.props.updateBoard(update);
    this.props.toggle();
  };

  render() {
    return (
      <BoardVisibilityOptions
        className={this.props.className}
        updateVisibility={this.updateVisibility}
      />
    );
  }
}

export default BoardVisibilityUpdate;
