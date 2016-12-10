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
    this.delayedResetMenus = this.delayedResetMenus.bind(this);
  }

  componentDidMount() {
    if(this.props.currentUser) this.props.fetchBoards();
  }

  componentWillReceiveProps(newProps) {
    if(this.props.location.pathname !==
        newProps.location.pathname) {
      console.log(this.props.resetMenus());
      this.props.resetMenus();
    }
  }

  componentWillUnmount() {
    this.props.resetMenus();
  }

  toggleMenu(menu) {
    return (e) => {
      this.props.toggleMenu(menu);
    };
  }

  delayedResetMenus(e) {
    // TODO figure out why this gets called twice
    // window.setTimeout(this.props.resetMenus, 200);
  }

  render () {
    const { currentUser, menuStatus, toggleMenu, resetMenus } = this.props;
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
              resetMenus={ this.delayedResetMenus }
              toggle={ this.toggleMenu('showHomeBoardsMenu') } />
            <HomeSearch />
          </ul>

          <ul className="nav-right clearfix">
            <HomeCreateMenu
              show={ showHomeCreateMenu }
              resetMenus={ this.delayedResetMenus }
              toggle={ this.toggleMenu('showHomeCreateMenu') } />
            <HomeProfileMenuContainer
              show={ showHomeProfileMenu }
              resetMenus={ this.delayedResetMenus }
              toggle={ this.toggleMenu('showHomeProfileMenu') } />
            <HomeInformationMenu
              show={ ShowHomeInformationMenu }
              resetMenus={ this.delayedResetMenus }
              toggle={ this.toggleMenu('ShowHomeInformationMenu') } />
            <HomeNotificationMenu
              show={ ShowHomeNotificationMenu }
              resetMenus={ this.delayedResetMenus }
              toggle={ this.toggleMenu('ShowHomeNotificationMenu') } />
          </ul>

        </nav>
      );

    }
  }
}

export default withRouter(HomeNavigation);
