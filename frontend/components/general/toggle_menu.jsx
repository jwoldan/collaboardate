import React from 'react';

class ToggleMenu extends React.Component {

  constructor() {
    super();

    this.toggle = this.toggle.bind(this);
    this.stopPropagation = this.stopPropagation.bind(this);
  }

  toggle(e) {
    this.stopPropagation(e);
    if (!this.props.disabled) {
      this.props.toggle();
    }
  }

  stopPropagation(e) {
    if(e) e.stopPropagation();
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
      <section className={ menuClass } onClick={ this.stopPropagation }>
        { titleContent }
        { menuContent }
      </section>
    );
  }

}

export default ToggleMenu;
