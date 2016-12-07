import React from 'react';
import { withRouter, Link } from 'react-router';

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
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
    this.props.login(this.state).then(
      () => this.props.router.push('/')
    );
  }

  errorList(errors) {

    if(errors.length > 0) {
      return (
        <section className="user-errors">
          <ul>
            { errors.map((error, idx) => (
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
    const { username, password } = this.state;

    return (
      <section className="user-form login-form">

        { errorList }

        <h1>Log in to Collaboardate</h1>
        <form onSubmit={ this.submit }>

          <label htmlFor="login-username">
            Email <span className="quiet">(or username)</span>
          </label>
          <input id="login-username"
            className="input"
            type="text"
            placeholder="e.g., spaceman.spiff@gross.club"
            value={ username }
            onChange={ this.update('username') }
          />

          <label htmlFor="login-password">Password</label>
          <input id="login-password"
            className="input"
            type="password"
            value={ password }
            placeholder="e.g., ∙∙∙∙∙∙∙∙∙∙∙∙"
            onChange={ this.update('password') }
          />

        <input type="submit" className="submit" value="Log In" />

        </form>

        <p>
          Don&#8217;t have an account?&nbsp;
          <Link to="/signup">Create a Collaboardate account.</Link>
        </p>
      </section>
    );
  }
}

export default withRouter(LoginForm);
