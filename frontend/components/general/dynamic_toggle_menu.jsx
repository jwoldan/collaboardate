import React from 'react';

class DynamicToggleMenu extends React.Component {
  state = {
    menuKey: null,
  };

  stopPropagation = e => {
    if (e) e.stopPropagation();
  };

  toggle = e => {
    this.stopPropagation(e);
    if (!this.props.disabled) {
      this.props.toggle(this.state.menuKey);
    }
  };

  renderMenu(menuTitle, menuContent, customClass = '') {
    const { children, showStatus, disabled } = this.props;

    const show = showStatus(this.state.menuKey);

    let menuClass = `menu ${customClass}`;
    if (show) menuClass += ' show';

    let titleContent = '';
    if (menuTitle) {
      titleContent = (
        <section onClick={this.stopPropagation}>
          <span className="menu-close" onClick={this.toggle} />
          <section className="menu-header">{menuTitle}</section>
        </section>
      );
    }

    return (
      <section className={menuClass}>
        {titleContent}
        {menuContent}
      </section>
    );
  }
}

export default DynamicToggleMenu;
