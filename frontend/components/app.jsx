import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const BoardContainer = React.lazy(() =>
  import(/* webpackChunkName: "BoardContainer" */ './boards/board_container')
);
import BoardsIndexContainer from './boards/boards_index_container';
import HomeContainer from './home/home_container';
const ProfileContainer = React.lazy(() =>
  import(/* webpackChunkName: "ProfileContainer" */ './user/profile_container')
);
import WelcomeContainer from './welcome/welcome_container';

const boardRoute = <Route path="/b/:boardId" element={<BoardContainer />} />;
const cardRoute = <Route path="/c/:cardId" element={<BoardContainer />} />;

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
            <Routes>
              <Route path="/" element={<BoardsIndexContainer />} />
              {boardRoute}
              {cardRoute}
              <Route path="/u/:username" element={<ProfileContainer />} />
            </Routes>
          </Suspense>
        </HomeContainer>
      );
      // HACK: This isn't good, just trying to get it working
    } else if (location.pathname.match(/\/(b|c)\/\d+/)) {
      innerContent = (
        <HomeContainer>
          <Routes>
            {boardRoute}
            {cardRoute}
          </Routes>
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
