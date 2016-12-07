import React from 'react';
import { Link } from 'react-router';

export default () => (
  <nav className="welcome-nav clearfix">
    <section className="logo">Collaboardate</section>
    <section className="buttons">
      <Link to="/login" className="button">Log In</Link>
      <Link to="/signup" className="button green bold">Sign Up</Link>
    </section>
  </nav>
);
