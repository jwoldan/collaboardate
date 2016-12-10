import React from 'react';

import ToggleMenu from '../general/toggle_menu';
import ListCreateFormContainer from './list_create_form_container';

class ListCreate extends ToggleMenu {

  render () {

    const menuContent = (
      <section>
        <ListCreateFormContainer toggle={ this.toggle }/>
      </section>
    );

    return (
      <li className="list list-create">
        <section className="list-create-button" onClick={ this.toggle }>
          Add a list...
        </section>
        { this.renderMenu(null, menuContent, 'list-create-menu') }
      </li>
    );
  }
}

export default ListCreate;
