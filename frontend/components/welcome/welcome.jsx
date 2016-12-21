import React from 'react';
import { withRouter, Link } from 'react-router';

import WelcomeNavigation from './welcome_navigation';

class Welcome extends React.Component {

  constructor() {
    super();

    this.loginGuest = this.loginGuest.bind(this);
  }

  loginGuest() {
    this.props.loginGuest().then(
      () => this.props.router.push('/')
    );
  }

  render() {
    return (
      <section className="welcome">

        <WelcomeNavigation />

        <section className="welcome-splash" />

        <section className="welcome-splash-content welcome-text-content">
          <h1>Collaboardate keeps everyone on the same page.</h1>
          <p>
            Organize your boards, lists, and cards, and organize your life.
          </p>
          <Link to="/signup" className="signup button green bold">
            Sign Up for Free
          </Link>
          <a className="signup button green bold" onClick={ this.loginGuest }>
            Log In as Guest
          </a>
          <p className="small">
            Already use Collaboardate?&nbsp;
            <Link to="/login" className="login">Log in.</Link>
          </p>
        </section>

        <section className="welcome-tail welcome-text-content">
          <p>
            Ready to Collaboardate?<br />
          <span className="bold">It&#8217;s free to sign up</span>
          , so why not give it a shot?
          </p>
          <Link to="/signup" className="signup button green bold">
            Sign Up - It&#8217;s Free.
          </Link>
          <p className="small">
            Already have an account?&nbsp;
            <Link to="/login" className="login">Log in.</Link>
          </p>
        </section>

      </section>
    );
  }
}

export default withRouter(Welcome);
