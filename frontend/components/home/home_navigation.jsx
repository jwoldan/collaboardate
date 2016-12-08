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

    this.state = {
      show: {
        boards: false,
        create: false,
        profile: false,
        information: false,
        notification: false,
      }
    };

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu(menu) {

    return () => {
      const newShow = {};

      Object.keys(this.state.show).forEach((currentMenu) => {
        if(currentMenu === menu) {
          newShow[menu] = !this.state.show[menu];
        } else {
          newShow[currentMenu] = false;
        }
      });

      this.setState({ show: newShow });
    };
  }

  render () {
    const {
      boards,
      create,
      profile,
      information,
      notification,
    } = this.state.show;

    return (
      <nav className="home-nav clearfix">

        <Link to="/" className="logo" />

        <ul className="nav-left clearfix">
          <HomeBoardsMenuContainer
            show={ boards }
            toggle={ this.toggleMenu('boards') }
          />
          <HomeSearch />
        </ul>

        <ul className="nav-right clearfix">
          <HomeCreateMenu
            show={ create }
            toggle={ this.toggleMenu('create') }
          />
          <HomeProfileMenuContainer
            show={ profile }
            toggle={ this.toggleMenu('profile') }
          />
          <HomeInformationMenu
            show={ information }
            toggle={ this.toggleMenu('information') }
          />
          <HomeNotificationMenu
            show={ notification }
            toggle={ this.toggleMenu('notification') }
          />
        </ul>

      </nav>
    );
  }
}

export default withRouter(HomeNavigation);
