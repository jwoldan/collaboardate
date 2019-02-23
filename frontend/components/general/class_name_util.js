import moment from 'moment';

export const dueDateClassName = card => {
  let dayDiff = moment().diff(moment(card.due_date), 'days');
  let hourDiff = moment().diff(moment(card.due_date), 'hours');

  let displayClass = '';

  if (card.due_date_complete) {
    displayClass = ' completed';
  } else {
    if (hourDiff > -4 && hourDiff <= 8) {
      displayClass = ' immediate';
    } else {
      if (hourDiff > 8) {
        displayClass = ' recent';
      }
      if (hourDiff < 0 && dayDiff > -2) {
        displayClass = ' upcoming';
      }
    }
  }

  return displayClass;
};
