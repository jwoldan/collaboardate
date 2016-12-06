import React from 'react';
import { Link } from 'react-router';

export default () => (
  <nav className='welcome-nav'>
    <Link to="/login">Log In</Link>
    <Link to="/signup">Sign Up</Link>
  </nav>
);
