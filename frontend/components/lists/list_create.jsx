import React from 'react';

import ToggleMenu from '../general/toggle_menu';
import WithMenuStatus from '../general/with_menu_status';

import ListCreateFormContainer from './list_create_form_container';

const renderMenuContent = toggle => (
  <section>
    <ListCreateFormContainer toggle={toggle} />
  </section>
);

const ListCreate = ({ disabled }) => {
  if (disabled) return null;

  return (
    <li>
      <section className="list list-create">
        <WithMenuStatus menuKey="showListCreate">
          {({ show, toggle }) => (
            <>
              <section className="list-create-button" onClick={toggle}>
                Add a list...
              </section>
              <ToggleMenu
                className="list-create-menu"
                disabled={disabled}
                show={show}
                toggle={toggle}
              >
                {renderMenuContent(toggle)}
              </ToggleMenu>
            </>
          )}
        </WithMenuStatus>
      </section>
    </li>
  );
};

export default ListCreate;
