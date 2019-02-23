import React from 'react';

class BoardShareSearchResult extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { board, user, alreadyShared, shareId } = this.props;
    if (alreadyShared) {
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

    let buttonClass = 'button small';
    if (alreadyShared) {
      buttonClass += ' red';
    } else {
      buttonClass += ' green';
    }

    return (
      <li className="share-search-result clearfix" onClick={this.handleClick}>
        <span className="search-user">
          {user.full_name} ({user.username})
        </span>
        <span className={buttonClass}>{alreadyShared ? 'Remove' : 'Add'}</span>
      </li>
    );
  }
}

export default BoardShareSearchResult;
