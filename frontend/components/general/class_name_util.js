import dayjs from 'dayjs';

export const dueDateClassName = card => {
  let dayDiff = dayjs().diff(dayjs(card.due_date), 'days');
  let hourDiff = dayjs().diff(dayjs(card.due_date), 'hours');

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
