import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

const BoardContainer = React.lazy(() =>
  import(/* webpackChunkName: "BoardContainer" */ './boards/board_container')
);
import BoardsIndexContainer from './boards/boards_index_container';
import HomeContainer from './home/home_container';
const ProfileContainer = React.lazy(() =>
  import(/* webpackChunkName: "ProfileContainer" */ './user/profile_container')
);
import WelcomeContainer from './welcome/welcome_container';

const boardRoute = <Route path="/b/:boardId" component={BoardContainer} />;
const cardRoute = <Route path="/c/:cardId" component={BoardContainer} />;

class App extends React.Component {
  resetMenus = () => {
    const { menuIsOpen, resetMenus } = this.props;
    if (menuIsOpen) resetMenus();
  };

  render() {
    const { currentUser, children, location } = this.props;
    let innerContent;

    if (currentUser) {
      innerContent = (
        <HomeContainer>
          <Suspense fallback={null}>
            <Switch>
              <Route exact path="/" component={BoardsIndexContainer} />
              {boardRoute}
              {cardRoute}
              <Route path="/u/:username" component={ProfileContainer} />
            </Switch>
          </Suspense>
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
      <div id="app" onClick={this.resetMenus}>
        {innerContent}
      </div>
    );
  }
}

export default App;
