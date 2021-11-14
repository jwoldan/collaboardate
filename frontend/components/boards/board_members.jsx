import React from 'react';

import UserIcon from '../user/user_icon';

export default ({ users }) => (
  <ul className="board-members">
    {users.map((user) => (
      <UserIcon key={user.id} user={user} />
    ))}
  </ul>
);
