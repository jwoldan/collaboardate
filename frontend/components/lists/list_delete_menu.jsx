import React from 'react';

import { tryStopPropagation } from '../../util/event_util';

import ToggleMenu from '../general/toggle_menu';
import WithMenuStatus from '../general/with_menu_status';

const menuKeyBase = 'showListDeleteMenu';

class ListDeleteMenu extends React.Component {
  deleteList = () => {
    this.props.deleteList(this.props.list.id).then(this.toggleMenu);
  };

  renderMenuContent() {
    return (
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
  }

  render() {
    const { disabled, list, showStatus } = this.props;
    const menuKey = `${menuKeyBase}-${list.id}`;

    return (
      <section>
        <WithMenuStatus menuKey={menuKey} leaveOthers>
          {({ show, toggle }) => (
            <>
              <a onClick={toggle}>Delete List</a>
              <ToggleMenu
                className="list-delete-menu"
                disabled={disabled}
                menuTitle="Delete List?"
                show={show}
                toggle={toggle}
              >
                {this.renderMenuContent()}
              </ToggleMenu>
            </>
          )}
        </WithMenuStatus>
      </section>
    );
  }
}

export default ListDeleteMenu;
