import React from 'react';

import { tryStopPropagation } from '../../util/event_util';

import ToggleMenu from '../general/toggle_menu';
import ListDeleteMenuContainer from './list_delete_menu_container';
import WithMenuStatus from '../general/with_menu_status';

const menuKeyBase = 'showListMenu';

const ListMenu = ({ disabled, list, showStatus }) => {
  const menuKey = `${menuKeyBase}-${list.id}`;
  const menuContent = <ListDeleteMenuContainer list={list} />;

  let iconClass = 'icon icon-more-black icon-list-menu';
  if (disabled) iconClass += ' hide';

  return (
    <section>
      <WithMenuStatus menuKey={menuKey}>
        {({ show, toggle }) => (
          <>
            <span className={iconClass} onClick={toggle} />
            <ToggleMenu
              className="list-menu"
              disabled={disabled}
              menuTitle="List Actions"
              show={show}
              toggle={toggle}
            >
              {menuContent}
            </ToggleMenu>
          </>
        )}
      </WithMenuStatus>
    </section>
  );
};

export default ListMenu;
