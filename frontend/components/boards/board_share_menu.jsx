import React from 'react';

import ToggleMenu from '../general/toggle_menu';

import BoardShareSearchResultContainer from './board_share_search_result_container';

class BoardShareMenu extends ToggleMenu {
  constructor() {
    super();

    this.state = {
      query: '',
      results: [],
    };

    this.handleInput = this.handleInput.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.show !== newProps.show) {
      this.setState({ query: '', results: [] });
    }
  }

  handleInput(e) {
    const query = e.currentTarget.value;
    this.setState({ query });
    if (query.trim() !== '') {
      this.props.search(query).then(results => this.setState({ results }));
    } else {
      this.setState({ results: [] });
    }
  }

  render() {
    const { show } = this.props;
    const { query, results } = this.state;

    const menuContent = (
      <section className="menu-section">
        <span className="small loud">
          <span className="quiet">Type to search by username:</span>
          <input className="input" onChange={this.handleInput} ref="searchInput" value={query} />
          <ul>
            {results.map(user => (
              <BoardShareSearchResultContainer key={user.id} user={user} />
            ))}
          </ul>
        </span>
      </section>
    );

    if (show) {
      setTimeout(() => this.refs.searchInput.focus(), 1);
    }

    return (
      <section className="board-menu-item">
        <a onClick={this.toggle}>Edit Sharing</a>
        {this.renderMenu('Sharing', menuContent)}
      </section>
    );
  }
}

export default BoardShareMenu;
