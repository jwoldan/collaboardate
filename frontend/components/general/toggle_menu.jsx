import React from 'react';

import { tryStopPropagation } from '../../util/event_util';

const ToggleMenu = ({ children, className = '', disabled, menuTitle, show, toggle }) => {
  if (!show) return null;

  let menuClass = `menu show ${className}`;

  let titleContent = '';
  if (menuTitle) {
    titleContent = (
      <section>
        <span className="menu-close" onClick={toggle} />
        <section className="menu-header">{menuTitle}</section>
      </section>
    );
  }

  return (
    <section className={menuClass} onClick={tryStopPropagation}>
      {titleContent}
      {children}
    </section>
  );
};

export default ToggleMenu;
