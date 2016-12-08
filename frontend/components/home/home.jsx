import React from 'react';
import { withRouter, Link } from 'react-router';

import HomeNavigationContainer from './home_navigation_container';

export default ({ children }) => (
  <section className="home">
    <HomeNavigationContainer />
    { children }
  </section>
);
