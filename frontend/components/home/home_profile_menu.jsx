import React from 'react';
import { withRouter } from 'react-router';

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
        <li><a onClick={ this.logout }>Log Out</a></li>
      </ul>
    );

    return (
      <li className="nav-item">
        <div className=" nav-button profile-button" onClick={ this.toggle }>
          <span className="initials">{ safeInitials }</span>
          <span>{ safeFullName }</span>
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
