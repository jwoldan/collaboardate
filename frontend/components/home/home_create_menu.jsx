import React from 'react';

import BoardCreateMenu from '../boards/board_create_menu';

class HomeCreateMenu extends React.Component {

  constructor() {
    super();

    this.state = {
      showMenu: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if(newProps.show === false) {
      this.setState({ showMenu: false });
    }
  }

  toggle() {
    this.setState({ showMenu: !this.state.showMenu });
  }

  render() {
    const { show, toggle, resetMenus } = this.props;

    let dropdownClass = "menu dropdown dropdown-create";
    if(show) dropdownClass += " show";

    return (
      <li className="nav-item" tabIndex="0" onBlur={ resetMenus }>
        <div className="nav-button" onClick={ toggle }>
          <span className="icon icon-add" />
        </div>
        <section className={ dropdownClass }>
          <span className="menu-close" onClick={ toggle }></span>
          <section className="menu-header">
            Create
          </section>
          <ul>
            <li>
              <a onClick={ this.toggle }>
                <h4>Create Board...</h4>
                <span className="quiet small">
                  A board is a collection of cards ordered in a list of lists.
                  Use it to manage a project, track a collection,
                  or organize anything.
                </span>
              </a>
              <BoardCreateMenu
                show={ this.state.showMenu }
                toggle = { this.toggle }
              />
            </li>
          </ul>
        </section>
      </li>
    );
  }
}

export default HomeCreateMenu;
