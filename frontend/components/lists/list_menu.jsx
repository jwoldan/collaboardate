import React from 'react';

import DynamicToggleMenu from '../general/dynamic_toggle_menu';
import ListDeleteMenuContainer from './list_delete_menu_container';

const menuKeyBase = 'showListMenu';

class ListMenu extends DynamicToggleMenu {

  componentDidMount() {
    const menuKey = `${menuKeyBase}-${this.props.list.id}`;
    this.setState({ menuKey });
    this.props.addMenu(menuKey);
  }

  componentWillReceiveProps(newProps) {
    if(this.props.list.id !== newProps.list.id) {
      this.props.removeMenu(this.state.menuKey);
      this.setState({ menuKey: `${menuKeyBase}-${newProps.list.id}` });
      this.props.addMenu(this.state.menuKey);
    }
  }

  componentWillUnmount() {
    this.props.removeMenu(this.state.menuKey);
  }

  render() {

    const menuContent = (
      <ListDeleteMenuContainer list={ this.props.list }/>
    );

    return (
      <section>
        <span
          className="icon icon-more-black icon-list-menu"
          onClick={ this.toggle } />
        { this.renderMenu("List Actions", menuContent, "list-menu") }
      </section>
    );
  }
}

export default ListMenu;
