import dayjs from 'dayjs';

/* eslint-disable import/prefer-default-export */
export const dueDateClassName = card => {
  const dayDiff = dayjs().diff(dayjs(card.due_date), 'days');
  const hourDiff = dayjs().diff(dayjs(card.due_date), 'hours');

  let displayClass = '';

  if (card.due_date_complete) {
    displayClass = ' completed';
  } else if (hourDiff > -4 && hourDiff <= 8) {
    displayClass = ' immediate';
  } else {
    if (hourDiff > 8) {
      displayClass = ' recent';
    }
    if (hourDiff < 0 && dayDiff > -2) {
      displayClass = ' upcoming';
    }
  }

  return displayClass;
};
