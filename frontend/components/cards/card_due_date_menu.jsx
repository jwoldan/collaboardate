import React from 'react';

import ToggleMenu from '../general/toggle_menu';
import WithMenuStatus from '../general/with_menu_status';

import CardDueDateFormContainer from './card_due_date_form_container';

class CardDueDateMenu extends React.Component {
  render() {
    const { card, disabled } = this.props;

    return (
      <WithMenuStatus menuKey="showCardDueDateMenu">
        {({ show, toggle }) => (
          <section className="menu-due-date" onClick={toggle}>
            <li>Due Date</li>
            <ToggleMenu disabled={disabled} menuTitle="Change Due Date" show={show} toggle={toggle}>
              <CardDueDateFormContainer card={card} toggle={toggle} />
            </ToggleMenu>
          </section>
        )}
      </WithMenuStatus>
    );
  }
}

export default CardDueDateMenu;
