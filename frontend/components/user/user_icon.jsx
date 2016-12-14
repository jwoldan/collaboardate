import React from 'react';

export default ({ user }) => {
  return (
    <li className="user-icon">
      { user.initials }
    </li>
  );
};
