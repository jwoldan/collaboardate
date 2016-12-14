export const createShare = (board_share, success, error) => (
  $.ajax({
    method: 'POST',
    url: '/api/board_shares',
    data: { board_share },
    success,
    error,
  })
);

export const fetchShare = (id, success, error) => (
  $.ajax({
    method: 'GET',
    url: `/api/board_shares/${id}`,
    success,
    error,
  })
);

export const deleteShare = (id, success, error) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/board_shares/${id}`,
    success,
    error,
  })
);
