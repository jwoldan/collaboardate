import React from 'react';

class Profile extends React.Component {

  constructor() {
    super();

    this.state = {
      editing: false,
      profile: {},
    };

    this.toggleEdit = this.toggleEdit.bind(this);
    this.update = this.update.bind(this);
    this.updateProfile = this.updateProfile.bind(this);
  }

  componentWillMount() {
    const { currentUser, params, fetchProfile } = this.props;
    if (params.username !== currentUser.username) {
      fetchProfile(params.username);
    }

    if (this.props.editable) {
      const profile = Object.assign({}, this.props.profile);
      this.setState({ profile });
    }
  }

  componentWillReceiveProps(newProps) {
    const { params, fetchProfile } = this.props;
    if (params.username !== newProps.params.username &&
        newProps.params.username !== newProps.currentUser.username) {
      fetchProfile(newProps.params.username);

    }

    this.setState({ editing: false });
    if (newProps.editable) {
      const profile = Object.assign({}, newProps.profile);
      this.setState({ profile });
    }
  }

  componentWillUnmount() {
    this.props.clearProfile();
  }

  toggleEdit(e) {
    this.setState({ editing: !this.state.editing });
  }

  update(property) {
    return (e) => {
      const profile = Object.assign({}, this.state.profile);
      profile[property] = e.currentTarget.value;
      this.setState({ profile });
    };
  }

  updateProfile(e) {
    e.preventDefault();
    this.props.updateUser(this.state.profile);
  }


  render() {
    const { currentUser, profile, editable } = this.props;
    const { editing } = this.state;
    const editableProfile = this.state.profile;

    let editButton = null;
    if (editable) {
      editButton = (
        <span className="button edit" onClick={ this.toggleEdit }>
          Edit profile
        </span>
      );
    }

    let profileContent;
    if (editing) {

      profileContent = (
        <form onSubmit= { this.updateProfile }>
          <label>
            <span className="bold">Full Name</span>
            <input
              type="text"
              className="input"
              value={ editableProfile.full_name }
              onChange={ this.update('full_name') } />
          </label>
          <label>
            <span className="bold">Username</span>
            <input
              type="text"
              className="input"
              value={ editableProfile.username }
              onChange={ this.update('username') } />
          </label>
          <label>
            <span className="bold">Initials</span>
            <input
              type="text"
              className="input"
              value={ editableProfile.initials }
              onChange={ this.update('initials') } />
          </label>
          <label>
            <span className="bold">Bio</span>
            <span className="quiet">(optional)</span>
          <textarea
            className="input"
            value={ editableProfile.bio }
            onChange={ this.update('bio') } />
          </label>
          <input
            type="submit"
            className="button green"
            value="Save" />
          <input
            type="button"
            className="button"
            onClick={ this.toggleEdit }
            value="Cancel" />
        </form>
      );

    } else {

      profileContent = (
        <section>
          <h1>{ profile.full_name }</h1>&nbsp;
          <span>@{ profile.username }</span>
          { profile.bio ? <p className="bio">{ profile.bio }</p> : null }
          { editButton }
        </section>
      );

    }

    return (
      <section className="user-profile">
        <section className="profile">
          <section>
            <span className="user-icon large">{ profile.initials }</span>
          </section>
          { profileContent }
        </section>
      </section>
    );

  }
}

export default Profile;
