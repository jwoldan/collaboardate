import React from 'react';

class ToggleMenu extends React.Component {

  constructor() {
    super();

    this.toggle = this.toggle.bind(this);
  }

  toggle(e) {
    e.stopPropagation();
    if (!this.props.disabled) {
      this.props.toggle();
    }
  }

  renderMenu(menuTitle, menuContent, customClass = '') {
    const { children, show, disabled } = this.props;

    let menuClass = `menu ${customClass}`;
    if (show) menuClass += " show";

    let titleContent = '';
    if(menuTitle) {
      titleContent = (
        <section>
          <span
            className="menu-close"
            onClick={ this.toggle } />
          <section className="menu-header">
            { menuTitle }
          </section>
        </section>
      );
    }

    return (
      <section className={ menuClass }>
        { titleContent }
        { menuContent }
      </section>
    );
  }

}

export default ToggleMenu;
