import React from 'react';

class HomeProfile extends React.Component {

  constructor() {
    super();

    this.logout = this.logout.bind(this);
  }

  logout () {
    this.props.logout();
  }

  render() {
    const { currentUser, show, toggle } = this.props;
    const safeInitials = currentUser ? currentUser.initials : '';
    const safeFullName = currentUser ? currentUser.full_name : '';
    const safeUsername = currentUser ? currentUser.username : '';
    let dropdownClass = "profile-dropdown dropdown";
    if(show) dropdownClass += " show";

    return (
      <li className="nav-item">
        <div className=" nav-button profile-button" onClick={ toggle }>
          <span className="initials">{ safeInitials }</span>
          <span>{ safeFullName }</span>
        </div>
        <section className={ dropdownClass }>
          <span className="menu-close" onClick={ toggle }></span>
          <section className="profile-user">
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

  export default HomeProfile;