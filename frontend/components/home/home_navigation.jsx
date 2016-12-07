import React from 'react';
import { withRouter, Link } from 'react-router';

class HomeNavigation extends React.Component {

  constructor() {
    super();

    this.logout = this.logout.bind(this);
  }

  logout () {
    // const router = this.props.router
    this.props.logout();
  }

  render () {
    return (
      <nav className='home-nav'>
        <button onClick={ this.logout }>Log Out</button>
      </nav>
    );
  }
}

export default withRouter(HomeNavigation);
