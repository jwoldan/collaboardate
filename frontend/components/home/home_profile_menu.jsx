import React from 'react';
import { withRouter, Link } from 'react-router-dom';

import ToggleMenu from '../general/toggle_menu';
import WithMenuStatus from '../general/with_menu_status';

class HomeProfileMenu extends React.Component {
  logout = () => {
    this.props.logout().then(() => {
      if (this.props.location.pathname !== '/') this.props.history.push('/');
    });
  };

  renderMenuContent(toggle) {
    const { currentUser } = this.props;
    if (!currentUser) return null;

    return (
      <ul>
        <li>
          <Link to={`/u/${currentUser.username}`} onClick={toggle}>
            Profile
          </Link>
        </li>
        <li>
          <a onClick={this.logout}>Log Out</a>
        </li>
      </ul>
    );
  }

  render() {
    const { currentUser } = this.props;
    if (!currentUser) return null;

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
        <WithMenuStatus menuKey="showHomeProfileMenu">
          {({ show, toggle }) => (
            <>
              <div className="nav-button profile-button" onClick={toggle}>
                {userIcon}
                <span className={nameClass}>{currentUser.full_name}</span>
              </div>
              <ToggleMenu
                className="dropdown dropdown-profile"
                menuTitle={`${currentUser.full_name} (${currentUser.username})`}
                show={show}
                toggle={toggle}
              >
                {this.renderMenuContent(toggle)}
              </ToggleMenu>
            </>
          )}
        </WithMenuStatus>
      </li>
    );
  }
}

export default withRouter(HomeProfileMenu);
