import React from 'react';

class BoardShareSearchResult extends React.Component {

  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { board, user, alreadyShared } = this.props;
    if (alreadyShared) {
      const shareId = board.users[user.id].share_id;
      this.props.deleteShare(shareId);
    } else {
      this.props.createShare({
        board_id: board.id,
        sharee_id: user.id,
      });
    }

  }

  render() {
    const { user, alreadyShared } = this.props;

    return (
      <li onClick={ this.handleClick }>
        { user.username }
        { alreadyShared ? "yes" : "no" }
      </li>
    );
  }
}

export default BoardShareSearchResult;
