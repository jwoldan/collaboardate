import React from 'react';

export default ({ boards, toggle, show }) => {
  let dropdownClass = "menu dropdown boards-dropdown";
  if(show) dropdownClass += " show";

  return (
    <li className="nav-item">
      <div className="nav-button" onClick={ toggle }>
        <span className="icon" />Boards
      </div>
      <section className={ dropdownClass }>
        <span className="menu-close" onClick={ toggle }></span>
        <section className="menu-header">
          Test
        </section>
        <ul>
          <li><a>Log Out</a></li>
        </ul>
      </section>
    </li>
  );
};
