import React from 'react';
import { withRouter, Link } from 'react-router';

import HomeNavigation from './home_navigation';

export default ({ children }) => (
  <section className="home">
    <HomeNavigation />
    { children }
  </section>
);
