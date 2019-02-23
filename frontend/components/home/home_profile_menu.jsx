import React from 'react';
import { withRouter, Link } from 'react-router-dom';

import ToggleMenu from '../general/toggle_menu';

class HomeProfileMenu extends ToggleMenu {
  constructor() {
    super();

    this.logout = this.logout.bind(this);
  }

  logout() {
    this.props.logout().then(() => {
      if (this.props.location.pathname !== '/') this.props.history.push('/');
    });
  }

  render() {
    let { currentUser } = this.props;
    currentUser = currentUser ? currentUser : {};

    const menuContent = (
      <ul>
        <li>
          <Link to={`/u/${currentUser.username}`} onClick={this.toggle}>
            Profile
          </Link>
        </li>
        <li>
          <a onClick={this.logout}>Log Out</a>
        </li>
      </ul>
    );

    let userIcon;
    let nameClass = null;
    if (currentUser.avatar_url) {
      nameClass = 'name-with-image';
      userIcon = (
        <span className="image">
          <img src={currentUser.avatar_url} />
        </span>
      );
    } else {
      userIcon = <span className="initials">{currentUser.initials}</span>;
    }

    return (
      <li className="nav-item">
        <div className="nav-button profile-button" onClick={this.toggle}>
          {userIcon}
          <span className={nameClass}>{currentUser.full_name}</span>
        </div>
        {this.renderMenu(
          `${currentUser.full_name} (${currentUser.username})`,
          menuContent,
          'dropdown dropdown-profile'
        )}
      </li>
    );
  }
}

export default withRouter(HomeProfileMenu);
