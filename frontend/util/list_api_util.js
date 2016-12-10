export const createList = (list, success, error) => (
  $.ajax({
    method: 'POST',
    url: '/api/lists',
    data: { list },
    success,
    error,
  })
);

export const updateList = (list, success, error) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/lists/${list.id}`,
    data: { list },
    success,
    error,
  })
);

export const fetchLists = (boardId, success, error) => (
  $.ajax({
    method: 'GET',
    url: `/api/boards/${boardId}/lists`,
    success,
    error,
  })
);

export const fetchList = (id, success, error) => (
  $.ajax({
    method: 'GET',
    url: `/api/lists/${id}`,
    success,
    error,
  })
);

export const deleteList = (id, success, error) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/lists/${id}`,
    success,
    error,
  })
);
