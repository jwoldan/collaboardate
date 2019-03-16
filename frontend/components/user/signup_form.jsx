import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class SignupForm extends React.Component {
  state = {
    full_name: '',
    email: '',
    password: '',
  };

  componentDidMount() {
    if (this.props.currentUser) {
      this.props.history.push('/');
    }
  }

  loginGuest = () => {
    this.props.loginGuest().then(() => this.props.history.push('/'));
  };

  submit = e => {
    e.preventDefault();
    this.props.signup(this.state).then(() => this.props.history.push('/'));
  };

  update = property => {
    return e => this.setState({ [property]: e.currentTarget.value });
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
        <section className="user-errors">
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
    const { errors } = this.props;
    const errorList = this.errorList(errors);
    const { full_name, email, password } = this.state;

    let fullNameClass = 'input';
    if (typeof errors.full_name !== 'undefined') {
      fullNameClass += ' error';
    }

    let emailClass = 'input';
    if (typeof errors.email !== 'undefined') {
      emailClass += ' error';
    }

    let passwordClass = 'input';
    if (typeof errors.password !== 'undefined') {
      passwordClass += ' error';
    }

    return (
      <section className="user-form signup-form">
        {errorList}

        <h1>Create a Collaboardate Account</h1>
        <form onSubmit={this.submit}>
          <label htmlFor="signup-name">Name</label>
          <input
            id="signup-name"
            className={fullNameClass}
            type="text"
            placeholder="e.g., Calvin"
            value={full_name}
            onChange={this.update('full_name')}
          />

          <label htmlFor="signup-email">Email</label>
          <input
            id="signup-email"
            className={emailClass}
            type="text"
            placeholder="e.g., spaceman.spiff@gross.club"
            value={email}
            onChange={this.update('email')}
          />

          <label htmlFor="signup-password">Password</label>
          <input
            id="signup-password"
            className={passwordClass}
            type="password"
            value={password}
            placeholder="e.g., ∙∙∙∙∙∙∙∙∙∙∙∙"
            onChange={this.update('password')}
          />

          <input type="submit" className="submit" value="Create New Account" />
        </form>

        <p>
          Already have an account?&nbsp;
          <Link to="/login">Log in.</Link>
        </p>
        <p>
          Just want to try it out?&nbsp;
          <a className="loud bold" onClick={this.loginGuest}>
            Log in as Guest.
          </a>
        </p>
      </section>
    );
  }
}

export default withRouter(SignupForm);
