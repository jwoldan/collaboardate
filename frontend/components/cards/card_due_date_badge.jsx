import React from 'react';
import moment from 'moment';

import { dueDateClassName } from '../general/class_name_util';

export default ({ card }) => {

  const dueDateText = moment(card.due_date).format("MMM DD, YYYY");

  const displayClass = "due-date-badge" + dueDateClassName(card);

  if(card.due_date) {

    return (
      <span className={ displayClass }>
        <span className="icon icon-clock" />
        <span className="due-date-badge-text">{ dueDateText }</span>
      </span>
    );

  } else {
    return null;
  }

};
