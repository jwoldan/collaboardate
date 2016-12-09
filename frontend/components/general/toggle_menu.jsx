import React from 'react';

class ToggleMenu extends React.Component {

  constructor() {
    super();

    this.state = {
      show: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle(e) {
    this.setState({ show: !this.state.show });
  }

  renderMenu(menuTitle, menuContent) {
    const { children } = this.props;
    const { show } = this.state;

    let menuClass = "menu";
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
