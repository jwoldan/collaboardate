import React from 'react';
import { withRouter, Link } from 'react-router';

import HomeBoardsMenuContainer from './home_boards_menu_container';
import HomeSearch from './home_search';
import HomeCreateMenu from './home_create_menu';
import HomeProfileMenuContainer from './home_profile_menu_container';
import HomeInformationMenu from './home_information_menu';
import HomeNotificationMenu from './home_notification_menu';

class HomeNavigation extends React.Component {

  constructor() {
    super();

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  componentDidMount() {
    if(this.props.currentUser) this.props.fetchBoards();
  }

  toggleMenu(menu) {
    return (e) => {
      this.props.toggleMenu(menu);
    };
  }

  render () {
    const { currentUser, menuStatus, toggleMenu } = this.props;
    const {
      showHomeBoardsMenu,
      showHomeCreateMenu,
      showHomeProfileMenu,
      ShowHomeInformationMenu,
      ShowHomeNotificationMenu,
    } =  menuStatus;

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
            <HomeBoardsMenuContainer
              show={ showHomeBoardsMenu }
              toggle={ this.toggleMenu('showHomeBoardsMenu') } />
            <HomeSearch />
          </ul>

          <ul className="nav-right clearfix">
            <HomeCreateMenu
              show={ showHomeCreateMenu }
              toggle={ this.toggleMenu('showHomeCreateMenu') } />
            <HomeProfileMenuContainer
              show={ showHomeProfileMenu }
              toggle={ this.toggleMenu('showHomeProfileMenu') } />
            <HomeInformationMenu
              show={ ShowHomeInformationMenu }
              toggle={ this.toggleMenu('ShowHomeInformationMenu') } />
            <HomeNotificationMenu
              show={ ShowHomeNotificationMenu }
              toggle={ this.toggleMenu('ShowHomeNotificationMenu') } />
          </ul>

        </nav>
      );

    }
  }
}

export default withRouter(HomeNavigation);
