import React from 'react';
import { withRouter, Link } from 'react-router';

class SignupForm extends React.Component {
  constructor() {
    super();

    this.state = {
      full_name: '',
      email: '',
      password: '',
    };

    this.update = this.update.bind(this);
    this.submit = this.submit.bind(this);
  }

  update(property) {
    return e => this.setState({ [property]: e.currentTarget.value });
  }

  submit(e) {
    e.preventDefault();
    this.props.signup(this.state).then(
      () => this.props.router.push('/')
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
        <section className="user-errors">
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
    const { errors } = this.props;
    const errorList = this.errorList(errors);
    const { full_name, email, password } = this.state;

    return (
      <section className="user-form signup-form">

        { errorList }

        <h1>Create a Collaboardate Account</h1>
        <form onSubmit={ this.submit }>

          <label htmlFor="signup-name">Name</label>
          <input id="signup-name"
            type="text"
            placeholder="e.g., Calvin"
            value={ full_name }
            onChange={ this.update('full_name') }
          />

          <label htmlFor="signup-email">Email</label>
          <input id="signup-email"
            type="text"
            placeholder="e.g., spaceman.spiff@gross.club"
            value={ email }
            onChange={ this.update('email') }
          />

          <label htmlFor="signup-password">Password</label>
          <input id="signup-password"
            type="password"
            value={ password }
            placeholder="e.g., ∙∙∙∙∙∙∙∙∙∙∙∙"
            onChange={ this.update('password') }
          />

          <input type="submit" value="Create New Account" />

        </form>

        <p>
          Already have an account?&nbsp;
          <Link to="/login">Log in.</Link>
        </p>
      </section>
    );
  }
}

export default withRouter(SignupForm);
