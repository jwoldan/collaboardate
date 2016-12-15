import React from 'react';
import moment from 'moment';

import { dueDateClassName } from '../general/class_name_util';

class CardDueDateDisplay extends React.Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    const { card, updateCard } = this.props;

    this.props.updateCard({
      id: card.id,
      due_date_complete: !card.due_date_complete,
    });
  }

  render() {
    const { card } = this.props;

    let dueDateText;
    let after = false;
    let diff = moment().diff(moment(card.due_date));

    if (diff > 0) after = true;

    if (after) {
      dueDateText = moment().to(card.due_date);
    } else {
      dueDateText = moment(card.due_date).fromNow();
    }

    dueDateText +=
      ` (${moment(card.due_date).format("MMM DD, YYYY [at] h:mm A")})`;

    const  displayClass = "due-date-display" + dueDateClassName(card);

    return (
      <section>
        <span className="quiet">Due Date</span><br/>
        <span className={ displayClass } onClick={ this.toggle }>
          <span className="icon icon-checkbox" />{ dueDateText }
        </span>
      </section>
    );
  }
}

export default CardDueDateDisplay;
