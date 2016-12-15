import React from 'react';

class Profile extends React.Component {

  componentWillMount() {
    const { currentUser, params, fetchProfile } = this.props;
    if(params.username !== currentUser.username) {
      fetchProfile(params.username);
    }
  }

  componentWillReceiveProps(newProps) {
    const { params, fetchProfile } = this.props;
    if (params.username !== newProps.params.username &&
        newProps.params.username !== newProps.currentUser.username) {
      fetchProfile(newProps.params.username);
    }
  }

  componentWillUnmount() {
    this.props.clearProfile();
  }


  render() {
    const { currentUser, profile } = this.props;

    return (
      <section className="user-profile">
        <section className="profile">
          <section>
            <span className="user-icon large">{ profile.initials }</span>
          </section>
          <section>
            <h1>{ profile.full_name }</h1>&nbsp;
            <span>@{ profile.username }</span>
            <p className="bio">{ profile.bio }</p>
          </section>
        </section>
      </section>
    );
  }
}

export default Profile;
