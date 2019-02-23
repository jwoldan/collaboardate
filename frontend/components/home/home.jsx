import React from 'react';
import { withRouter } from 'react-router-dom';

import HomeNavigationContainer from './home_navigation_container';

export default ({ children, board }) => {
  let homeClass = 'home';
  if (board.background) homeClass += ` ${board.background}`;

  return (
    <section className={homeClass}>
      <HomeNavigationContainer />
      {children}
    </section>
  );
};
