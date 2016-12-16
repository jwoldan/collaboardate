import React from 'react';
import { Link } from 'react-router';

export default ({ user }) => {

  if (user.avatar_url) {
    return (
      <Link className="icon-link" to={`/${user.username}`}>
        <span className="user-icon">
          <img src={ user.avatar_url } />
        </span>
      </Link>
    );
  } else {
    return (
      <Link className="icon-link" to={`/${user.username}`}>
        <span className="user-icon">
          { user.initials }
      </span>
    </Link>
    );
  }
};
