export const createCard = (card, success, error) =>
  $.ajax({
    method: 'POST',
    url: '/api/cards',
    data: { card },
    success,
    error,
  });

export const updateCard = (card, success, error) =>
  $.ajax({
    method: 'PATCH',
    url: `/api/cards/${card.id}`,
    data: { card },
    success,
    error,
  });

export const fetchCards = (boardId, success, error) =>
  $.ajax({
    method: 'GET',
    url: `/api/boards/${boardId}/cards`,
    success,
    error,
  });

export const fetchCard = (id, success, error) =>
  $.ajax({
    method: 'GET',
    url: `/api/cards/${id}`,
    success,
    error,
  });

export const deleteCard = (id, success, error) =>
  $.ajax({
    method: 'DELETE',
    url: `/api/cards/${id}`,
    success,
    error,
  });
