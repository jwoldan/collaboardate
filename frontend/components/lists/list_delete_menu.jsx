import React from 'react';

import DynamicToggleMenu from '../general/dynamic_toggle_menu';

const menuKeyBase = 'showListDeleteMenu';

class ListDeleteMenu extends DynamicToggleMenu {
  constructor() {
    super();

    this.deleteList = this.deleteList.bind(this);
  }

  componentDidMount() {
    const menuKey = `${menuKeyBase}-${this.props.list.id}`;
    this.setState({ menuKey });
    this.props.addMenu(menuKey);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.list.id !== newProps.list.id) {
      this.props.removeMenu(this.state.menuKey);
      this.setState({ menuKey: `${menuKeyBase}-${newProps.list.id}` });
      this.props.addMenu(this.state.menuKey);
    }
  }

  componentWillUnmount() {
    this.props.removeMenu(this.state.menuKey);
  }

  deleteList() {
    this.props.deleteList(this.props.list.id).then(this.toggleMenu);
  }

  render() {
    const menuContent = (
      <section className="menu-section">
        <span className="small loud">
          Deleting a list is permanent and can&#8217;t be undone! If you&#8217;re sure, click the
          delete button below.
        </span>
        <a onClick={this.deleteList} className="button red">
          Delete
        </a>
      </section>
    );

    return (
      <section>
        <a onClick={this.toggle}>Delete List</a>
        {this.renderMenu('Delete List?', menuContent, 'list-delete-menu')}
      </section>
    );
  }
}

export default ListDeleteMenu;
