import React from 'react';
import { withRouter, Link } from 'react-router';

import ToggleMenu from '../general/toggle_menu';

class HomeProfileMenu extends ToggleMenu {

  constructor() {
    super();

    this.logout = this.logout.bind(this);
  }

  logout () {
    this.props.logout().then(() => {
      if (this.props.location.pathname !== '/') this.props.router.push("/");
    });
  }

  render() {
    const { currentUser } = this.props;
    const safeInitials = currentUser ? currentUser.initials : '';
    const safeFullName = currentUser ? currentUser.full_name : '';
    const safeUsername = currentUser ? currentUser.username : '';

    const menuContent = (
      <ul>
        <li>
          <Link to={`/${safeUsername}`} onClick={ this.toggle }>
            Profile
          </Link>
        </li>
        <li><a onClick={ this.logout }>Log Out</a></li>
      </ul>
    );

    let userIcon;
    let nameClass = null;
    if (currentUser.avatar_url ) {
      nameClass = "name-with-image";
      userIcon = (
        <span className="image"><img src={ currentUser.avatar_url }/></span>
      );
    } else {
      userIcon = <span className="initials">{ safeInitials }</span>;
    }

    return (
      <li className="nav-item">
        <div className="nav-button profile-button" onClick={ this.toggle }>
          { userIcon }
          <span className={ nameClass }>{ safeFullName }</span>
        </div>
        {
          this.renderMenu(
            `${safeFullName} (${safeUsername})`,
              menuContent,
              'dropdown dropdown-profile'
            )
        }
      </li>
    );
  }

}

  export default withRouter(HomeProfileMenu);
