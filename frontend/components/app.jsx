import React from 'react';

import Welcome from './welcome/welcome';
import HomeContainer from './home/home_container';

export default ({ currentUser, children }) => {

  if(currentUser !== null) {
    return (
      <div id="app">
        <HomeContainer>
          { children }
        </HomeContainer>
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
