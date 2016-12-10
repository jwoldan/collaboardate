import React from 'react';
import { withRouter } from 'react-router';

class HomeProfileMenu extends React.Component {

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
    const { currentUser, show, toggle, resetMenus } = this.props;
    const safeInitials = currentUser ? currentUser.initials : '';
    const safeFullName = currentUser ? currentUser.full_name : '';
    const safeUsername = currentUser ? currentUser.username : '';
    let dropdownClass = "menu dropdown dropdown-profile";
    if(show) dropdownClass += " show";

    return (
      <li className="nav-item" tabIndex="0" onBlur={ resetMenus }>
        <div className=" nav-button profile-button" onClick={ toggle }>
          <span className="initials">{ safeInitials }</span>
          <span>{ safeFullName }</span>
        </div>
        <section className={ dropdownClass }>
          <span className="menu-close" onClick={ toggle }></span>
          <section className="menu-header">
            { safeFullName } ({ safeUsername })
          </section>
          <ul>
            <li><a onClick={ this.logout }>Log Out</a></li>
          </ul>
        </section>
      </li>
    );
  }

}

  export default withRouter(HomeProfileMenu);
