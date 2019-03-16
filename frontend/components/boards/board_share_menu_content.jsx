import React from 'react';

import BoardShareSearchResultContainer from './board_share_search_result_container';

class BoardShareMenuContent extends React.Component {
  constructor(props) {
    super(props);

    this.input = React.createRef();
  }

  state = {
    query: '',
    results: [],
  };

  componentDidMount() {
    this.input.current.focus();
  }

  handleInput = e => {
    const query = e.currentTarget.value;
    this.setState({ query });
    if (query.trim() !== '') {
      this.props.search(query).then(results => this.setState({ results }));
    } else {
      this.setState({ results: [] });
    }
  };

  render() {
    const { query, results } = this.state;

    return (
      <section className="menu-section">
        <span className="small loud">
          <span className="quiet">Type to search by username:</span>
          <input className="input" onChange={this.handleInput} ref={this.input} value={query} />
          <ul>
            {results.map(user => (
              <BoardShareSearchResultContainer key={user.id} user={user} />
            ))}
          </ul>
        </span>
      </section>
    );
  }
}

export default BoardShareMenuContent;
