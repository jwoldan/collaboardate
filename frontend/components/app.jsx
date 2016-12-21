import React from 'react';

import WelcomeContainer from './welcome/welcome_container';
import HomeContainer from './home/home_container';

class App extends React.Component {

  constructor() {
    super();

    this.resetMenus = this.resetMenus.bind(this);
  }

  resetMenus() {
    const { menuIsOpen, resetMenus } = this.props;
    if (menuIsOpen) resetMenus();
  }

  render() {
    const { currentUser, children, params } = this.props;
    let innerContent;

    if (currentUser !== null ||
        (typeof params.boardId !== 'undefined') ||
        (typeof params.cardId !== 'undefined')) {
      innerContent = <HomeContainer children={ children } />;
    } else {
      innerContent = <WelcomeContainer />;
    }

    return (
      <div id="app" onClick= { this.resetMenus }>
        { innerContent }
      </div>
    );
  }
}

export default App;
