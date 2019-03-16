import React from 'react';

import { tryStopPropagation } from '../../util/event_util';

import DynamicToggleMenu from '../general/dynamic_toggle_menu';
import ListDeleteMenuContainer from './list_delete_menu_container';

const menuKeyBase = 'showListMenu';

class ListMenu extends React.Component {
  state = {
    menuKey: null,
  };

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

  toggle = e => {
    tryStopPropagation(e);
    if (!this.props.disabled) {
      this.props.toggle(this.state.menuKey);
    }
  };

  render() {
    const { disabled, showStatus } = this.props;
    const menuContent = <ListDeleteMenuContainer list={this.props.list} />;

    let iconClass = 'icon icon-more-black icon-list-menu';
    if (this.props.disabled) iconClass += ' hide';

    return (
      <section>
        <span className={iconClass} onClick={this.toggle} />
        <DynamicToggleMenu
          className="list-menu"
          disabled={disabled}
          menuTitle="List Actions"
          show={showStatus(this.state.menuKey)}
          toggle={this.toggle}
        >
          {menuContent}
        </DynamicToggleMenu>
      </section>
    );
  }
}

export default ListMenu;
