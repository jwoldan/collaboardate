import React from 'react';
import { Route, Switch } from 'react-router-dom';

import BoardContainer from './boards/board_container';
import BoardsIndexContainer from './boards/boards_index_container';
import HomeContainer from './home/home_container';
import ProfileContainer from './user/profile_container';
import WelcomeContainer from './welcome/welcome_container';

const boardRoute = <Route path="/b/:boardId" component={ BoardContainer } />;
const cardRoute = <Route path="/c/:cardId" component={ BoardContainer } />;

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
    const { currentUser, children, location } = this.props;
    let innerContent;

    if (currentUser) {
      innerContent = (
        <HomeContainer>
          <Switch>
            <Route exact path="/" component={ BoardsIndexContainer } />
            {boardRoute}
            {cardRoute}
            <Route path="/u/:username" component={ ProfileContainer } />
          </Switch>
        </HomeContainer>
      );
    // HACK: This isn't good, just trying to get it working
    } else if (location.pathname.match(/\/(b|c)\/\d+/)) {
      innerContent = (
        <HomeContainer>
          <Switch>
            {boardRoute}
            {cardRoute}
          </Switch>
        </HomeContainer>
      );
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
