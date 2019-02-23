import React from 'react';

import ToggleMenu from '../general/toggle_menu';
import ListCreateFormContainer from './list_create_form_container';

class ListCreate extends ToggleMenu {
  render() {
    const menuContent = (
      <section>
        <ListCreateFormContainer show={this.props.show} toggle={this.toggle} />
      </section>
    );

    if (this.props.disabled) {
      return null;
    } else {
      return (
        <li>
          <section className="list list-create">
            <section className="list-create-button" onClick={this.toggle}>
              Add a list...
            </section>
            {this.renderMenu(null, menuContent, 'list-create-menu')}
          </section>
        </li>
      );
    }
  }
}

export default ListCreate;
