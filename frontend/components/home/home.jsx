import React from 'react';
import { withRouter, Link } from 'react-router';

import HomeNavigation from './home_navigation';

class Home extends React.Component {

  render () {
    return (
      <HomeNavigation logout={ this.props.logout }/>
    );
  }
}

export default Home;
