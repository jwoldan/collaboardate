import React from 'react';

class Profile extends React.Component {
  state = {
    editing: false,
    profile: {},
  };

  componentDidMount() {
    const { username, currentUser, fetchProfile } = this.props;

    if (username !== currentUser.username) {
      fetchProfile(username);
    }

    if (this.props.editable) {
      const profile = Object.assign({}, this.props.profile);
      this.setState({ profile });
    }
  }

  componentWillReceiveProps(newProps) {
    const { fetchProfile, username: oldUserName } = this.props;
    const newUserName = newProps.username;

    if (oldUserName !== newUserName && newUserName !== newProps.currentUser.username) {
      this.setState({ editing: false });
      fetchProfile(newUserName);
    }

    if (newProps.editable && !this.props.editable) {
      const profile = Object.assign({}, newProps.profile);
      this.setState({ profile });
    }
  }

  componentWillUnmount() {
    this.props.clearProfile();
  }

  removeAvatar = () => {
    this.props.removeUserAvatar(this.state.profile.id);
  };

  toggleEdit = () => {
    this.setState({ editing: !this.state.editing });
    if (this.state.editing) {
      this.props.clearProfileErrors();
      this.setState({ profile: this.props.profile });
    }
  };

  update = property => {
    return e => {
      const profile = Object.assign({}, this.state.profile);
      profile[property] = e.currentTarget.value;
      this.setState({ profile });
    };
  };

  updateAvatar = e => {
    const file = e.currentTarget.files[0];
    var fileReader = new FileReader();
    fileReader.onloadend = () => {
      const formData = new FormData();
      formData.append('user[avatar]', file);
      this.props.updateUserAvatar(this.state.profile.id, formData);
    };

    if (file) {
      fileReader.readAsDataURL(file);
    }
  };

  updateProfile = e => {
    e.preventDefault();
    this.props.updateUser(this.state.profile).then(profile => {
      this.toggleEdit();
      this.props.history.push(`/u/${profile.username}`);
    });
  };

  errorsToStrings(errors) {
    const errorStrings = [];
    Object.keys(errors).forEach(key => {
      let errorString;
      if (key === 'full_name') {
        errorString = 'Name';
      } else {
        errorString = key.charAt(0).toUpperCase() + key.slice(1);
      }

      errorString += ' ' + errors[key].join(', ');
      errorStrings.push(errorString);
    });
    return errorStrings;
  }

  errorList(errors) {
    const errorStrings = this.errorsToStrings(errors);

    if (errorStrings.length > 0) {
      return (
        <section className="profile-errors">
          <ul>
            {errorStrings.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))}
          </ul>
        </section>
      );
    } else {
      return '';
    }
  }

  render() {
    const { currentUser, profile, editable, errors } = this.props;
    const { editing } = this.state;
    const editableProfile = this.state.profile;
    const errorList = this.errorList(errors);

    let editButton = null;
    if (editable) {
      editButton = (
        <span className="button edit" onClick={this.toggleEdit}>
          Edit profile
        </span>
      );
    }

    let userIcon;
    if (profile.avatar_url) {
      userIcon = (
        <span className="user-icon large">
          <img src={profile.avatar_url} />
        </span>
      );
    } else {
      userIcon = <span className="user-icon large">{profile.initials}</span>;
    }

    const changeAvatarLink = (
      <form>
        <label>
          <span className="avatar-action change">
            Change
            <input type="file" onChange={this.updateAvatar} />
          </span>
        </label>
      </form>
    );

    const removeAvatarLink = (
      <span className="avatar-action remove" onClick={this.removeAvatar}>
        Remove
      </span>
    );

    let profileContent;
    if (editing) {
      let fullNameClass = 'input';
      if (typeof errors.full_name !== 'undefined') {
        fullNameClass += ' error';
      }

      let usernameClass = 'input';
      if (typeof errors.username !== 'undefined') {
        usernameClass += ' error';
      }

      let initialsClass = 'input';
      if (typeof errors.initials !== 'undefined') {
        initialsClass += ' error';
      }

      profileContent = (
        <form onSubmit={this.updateProfile}>
          {errorList}

          <label>
            <span className="bold">Full Name</span>
            <input
              type="text"
              className={fullNameClass}
              value={editableProfile.full_name}
              onChange={this.update('full_name')}
            />
          </label>
          <label>
            <span className="bold">Username</span>
            <input
              type="text"
              className={usernameClass}
              value={editableProfile.username}
              onChange={this.update('username')}
            />
          </label>
          <label>
            <span className="bold">Initials</span>
            <input
              type="text"
              className={initialsClass}
              value={editableProfile.initials}
              onChange={this.update('initials')}
            />
          </label>
          <label>
            <span className="bold">Bio</span>
            <span className="quiet">(optional)</span>
            <textarea
              className="input"
              value={editableProfile.bio || ''}
              onChange={this.update('bio')}
            />
          </label>
          <input type="submit" className="button green" value="Save" />
          <input type="button" className="button" onClick={this.toggleEdit} value="Cancel" />
        </form>
      );
    } else {
      profileContent = (
        <section>
          <section>
            <h1>{profile.full_name}</h1>&nbsp;
            <span>@{profile.username}</span>
          </section>
          {profile.bio ? <p className="bio">{profile.bio}</p> : null}
          {editButton}
        </section>
      );
    }

    return (
      <section className="user-profile">
        <section className="profile">
          <section>
            {userIcon}
            {editable ? changeAvatarLink : null}
            {editable && profile.avatar_url ? removeAvatarLink : null}
          </section>
          {profileContent}
        </section>
      </section>
    );
  }
}

export default Profile;
