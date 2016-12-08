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
    window.setTimeout(this.props.resetMenus, 150);
  }

  render () {
    const { menuStatus, toggleMenu, resetMenus } = this.props;
    const {
      boards,
      create,
      profile,
      information,
      notification,
    } =  menuStatus;

    return (
      <nav className="home-nav clearfix">

        <Link to="/" className="logo" />

        <ul className="nav-left clearfix">
          <HomeBoardsMenuContainer
            show={ boards }
            resetMenus={ this.delayedResetMenus }
            toggle={ this.toggleMenu('boards') }
          />
          <HomeSearch />
        </ul>

        <ul className="nav-right clearfix">
          <HomeCreateMenu
            show={ create }
            resetMenus={ this.delayedResetMenus }
            toggle={ this.toggleMenu('create') }
          />
          <HomeProfileMenuContainer
            show={ profile }
            resetMenus={ this.delayedResetMenus }
            toggle={ this.toggleMenu('profile') }
          />
          <HomeInformationMenu
            show={ information }
            resetMenus={ this.delayedResetMenus }
            toggle={ this.toggleMenu('information') }
          />
          <HomeNotificationMenu
            show={ notification }
            resetMenus={ this.delayedResetMenus }
            toggle={ this.toggleMenu('notification') }
          />
        </ul>

      </nav>
    );
  }
}

export default withRouter(HomeNavigation);
