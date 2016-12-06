import React from 'react';

import Welcome from './welcome';
import Home from './home';

export default ({ currentUser, children }) => {

  if(currentUser !== null) {
    return (
      <div id="app">
        <Home>
          { children }
        </Home>
      </div>
    );
  } else {
    return (
      <div id="app">
        <Welcome />
      </div>
    );
  }

};
