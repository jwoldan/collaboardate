import React from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import { dueDateClassName } from '../general/class_name_util';

dayjs.extend(relativeTime);

class CardDueDateDisplay extends React.Component {
  toggle = () => {
    const { card, updateCard } = this.props;

    this.props.updateCard({
      id: card.id,
      due_date_complete: !card.due_date_complete,
    });
  };

  render() {
    const { card } = this.props;

    if (card.due_date) {
      let dueDateText;
      let after = false;
      let diff = dayjs().diff(dayjs(card.due_date));

      if (diff > 0) after = true;

      if (after) {
        dueDateText = dayjs().to(card.due_date);
      } else {
        dueDateText = dayjs(card.due_date).fromNow();
      }

      dueDateText += ` (${dayjs(card.due_date).format('MMM DD, YYYY [at] h:mm A')})`;

      const displayClass = 'due-date-display' + dueDateClassName(card);

      return (
        <section>
          <span className="quiet">Due Date</span>
          <br />
          <span className={displayClass} onClick={this.toggle}>
            <span className="icon icon-checkbox" />
            {dueDateText}
          </span>
        </section>
      );
    } else {
      return null;
    }
  }
}

export default CardDueDateDisplay;
