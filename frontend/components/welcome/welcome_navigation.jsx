import React from 'react';
import { Link } from 'react-router-dom';

class WelcomeNavigation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      scrolled: false,
    };

    this.handleScroll = this.handleScroll.bind(this);
    this.navClass = this.navClass.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    if (event.srcElement.body.scrollTop > 100) {
      this.setState({ scrolled: true });
    } else {
      this.setState({ scrolled: false });
    }
  }

  navClass() {
    return 'welcome-nav clearfix' + (this.state.scrolled ? ' scrolled' : '');
  }

  render() {
    return (
      <nav className={this.navClass()}>
        <span className="logo" />
        <section className="buttons">
          <Link to="/login" className="button">
            Log In
          </Link>
          <Link to="/signup" className="button green bold">
            Sign Up
          </Link>
        </section>
      </nav>
    );
  }
}

export default WelcomeNavigation;
