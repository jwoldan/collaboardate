export const createBoard = (board, success, error) =>
  $.ajax({
    method: 'POST',
    url: '/api/boards',
    data: { board },
    success,
    error,
  });

export const updateBoard = (board, success, error) =>
  $.ajax({
    method: 'PATCH',
    url: `/api/boards/${board.id}`,
    data: { board },
    success,
    error,
  });

export const fetchBoards = (success, error) =>
  $.ajax({
    method: 'GET',
    url: '/api/boards',
    success,
    error,
  });

export const fetchBoard = (id, success, error) =>
  $.ajax({
    method: 'GET',
    url: `/api/boards/${id}`,
    success,
    error,
  });

export const deleteBoard = (id, success, error) =>
  $.ajax({
    method: 'DELETE',
    url: `/api/boards/${id}`,
    success,
    error,
  });
