import React from 'react';
import { withRouter } from 'react-router';

class UserSearchResult extends React.Component {

  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.createShare({
      board_id: this.props.params.boardId,
      sharee_id: this.props.user.id,
    });
  }

  render() {
    const { user } = this.props;
    return (
      <li onClick={ this.handleClick }>{ user.username }</li>
    );
  }
}

export default withRouter(UserSearchResult);
