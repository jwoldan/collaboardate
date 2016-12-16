import React from 'react';

import Welcome from './welcome/welcome';
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
      innerContent = <Welcome/>;
    }

    return (
      <div id="app" onClick= { this.resetMenus }>
        { innerContent }
      </div>
    );
  }
}

export default App;
