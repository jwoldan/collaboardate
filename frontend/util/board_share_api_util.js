export const createShare = (boardShare, success, error) =>
  $.ajax({
    method: 'POST',
    url: '/api/board_shares',
    data: { board_share: boardShare },
    success,
    error,
  });

export const fetchShares = (boardId, success, error) =>
  $.ajax({
    method: 'GET',
    url: `/api/boards/${boardId}/board_shares`,
    success,
    error,
  });

export const fetchShare = (id, success, error) =>
  $.ajax({
    method: 'GET',
    url: `/api/board_shares/${id}`,
    success,
    error,
  });

export const deleteShare = (id, success, error) =>
  $.ajax({
    method: 'DELETE',
    url: `/api/board_shares/${id}`,
    success,
    error,
  });
