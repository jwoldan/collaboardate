import React from 'react';
import { withRouter, Link } from 'react-router';

import HomeNavigation from './home_navigation';

class Home extends React.Component {

  render () {
    const { children, currentUser, logout } = this.props;

    return (
      <section className="home">
        <HomeNavigation currentUser={ currentUser } logout={ logout }/>
        { children }
      </section>
    );
  }
}

export default Home;
