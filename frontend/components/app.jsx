import React from 'react';

import Welcome from './welcome/welcome';
import Home from './home/home';

export default (props) => {
  const { currentUser, children } = props;
  let innerContent;

  if (currentUser !== null || (typeof props.params.boardId !== 'undefined')) {
    innerContent = <Home children={ children } />;
  } else {
    innerContent = <Welcome/>;
  }

  return (
    <div id="app">
      { innerContent }
    </div>
  );

};
