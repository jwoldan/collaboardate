import React from 'react';
import { Link } from 'react-router-dom';

import HomeBoardsMenuContainer from './home_boards_menu_container';
import HomeSearch from './home_search';
import HomeCreateMenu from './home_create_menu';
import HomeProfileMenuContainer from './home_profile_menu_container';
import HomeInformationMenu from './home_information_menu';
import HomeNotificationMenu from './home_notification_menu';

class HomeNavigation extends React.Component {
  componentDidMount() {
    if (this.props.currentUser) this.props.fetchBoards();
  }

  render() {
    const { currentUser } = this.props;

    if (currentUser === null) {
      return (
        <nav className="home-nav clearfix">
          <Link to="/" className="logo" />
        </nav>
      );
    } else {
      return (
        <nav className="home-nav clearfix">
          <Link to="/" className="logo" />

          <ul className="nav-left clearfix">
            <HomeBoardsMenuContainer />
            <HomeSearch />
          </ul>

          <ul className="nav-right clearfix">
            <HomeCreateMenu />
            <HomeProfileMenuContainer />
            <HomeInformationMenu />
            <HomeNotificationMenu />
          </ul>
        </nav>
      );
    }
  }
}

export default HomeNavigation;
