import React from 'react';
import { withRouter } from 'react-router';

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
      this.setState({ editing: false });
      fetchProfile(newProps.params.username);
    }

    if (newProps.editable && !this.props.editable) {
      const profile = Object.assign({}, newProps.profile);
      this.setState({ profile });
    }
  }

  componentWillUnmount() {
    this.props.clearProfile();
  }

  toggleEdit() {
    this.setState({ editing: !this.state.editing });
    if(this.state.editing) {
      this.props.clearProfileErrors();
      this.setState({ profile: this.props. profile });
    }
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
    this.props.updateUser(this.state.profile).then(
      (profile) => {
        this.toggleEdit();
        this.props.router.push(`/${profile.username}`);
      }
    );
  }

  errorsToStrings(errors) {
    const errorStrings = [];
    Object.keys(errors).forEach((key) => {
      let errorString;
      if(key === 'full_name') {
        errorString = 'Name';
      } else {
        errorString = key.charAt(0).toUpperCase() + key.slice(1);
      }

      errorString += " " + errors[key].join(', ');
      errorStrings.push(errorString);
    });
    return errorStrings;
  }

  errorList(errors) {
    const errorStrings = this.errorsToStrings(errors);

    if(errorStrings.length > 0) {
      return (
        <section className="profile-errors">
          <ul>
            { errorStrings.map((error, idx) => (
              <li key={ idx }>{ error }</li>
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
        <span className="button edit" onClick={ this.toggleEdit }>
          Edit profile
        </span>
      );
    }

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
        <form onSubmit= { this.updateProfile }>

          { errorList }

          <label>
            <span className="bold">Full Name</span>
            <input
              type="text"
              className={ fullNameClass }
              value={ editableProfile.full_name }
              onChange={ this.update('full_name') } />
          </label>
          <label>
            <span className="bold">Username</span>
            <input
              type="text"
              className={ usernameClass }
              value={ editableProfile.username }
              onChange={ this.update('username') } />
          </label>
          <label>
            <span className="bold">Initials</span>
            <input
              type="text"
              className={ initialsClass }
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
