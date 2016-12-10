import React from 'react';

class ToggleMenu extends React.Component {

  constructor() {
    super();

    this.toggle = this.toggle.bind(this);
  }

  toggle(e) {
    if (!this.props.disabled) {
      this.props.toggle();
    }
  }

  renderMenu(menuTitle, menuContent, customClass = '') {
    const { children, show, disabled } = this.props;

    let menuClass = `menu ${customClass}`;
    if (show) menuClass += " show";

    return (
      <section className={ menuClass }>
        <span
          className="menu-close"
          onClick={ this.toggle } />
        <section className="menu-header">
          { menuTitle }
        </section>
        { menuContent }
      </section>
    );
  }

}

export default ToggleMenu;
