import React from 'react';

import Welcome from './welcome/welcome';
import Home from './home/home';

export default ({ currentUser, children }) => {

  if(currentUser !== null) {

    return (
      <div id="app">
        <Home children={ children } />
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
