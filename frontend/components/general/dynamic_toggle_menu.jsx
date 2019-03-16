import React from 'react';

import { tryStopPropagation } from '../../util/event_util';

const DynamicToggleMenu = ({ children, className = '', disabled, menuTitle, show, toggle }) => {
  let menuClass = `menu ${className}`;
  if (show) menuClass += ' show';

  let titleContent = '';
  if (menuTitle) {
    titleContent = (
      <section onClick={tryStopPropagation}>
        <span className="menu-close" onClick={toggle} />
        <section className="menu-header">{menuTitle}</section>
      </section>
    );
  }

  return (
    <section className={menuClass}>
      {titleContent}
      {children}
    </section>
  );
};

export default DynamicToggleMenu;
