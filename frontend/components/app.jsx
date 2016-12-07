import React from 'react';

import Welcome from './welcome';
import HomeContainer from './home_container';

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
