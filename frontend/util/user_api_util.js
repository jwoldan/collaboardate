
export const signup = (user, success, error) => (
  $.ajax({
    method: 'POST',
    url: '/api/users',
    data: { user },
    success,
    error,
  })
);

export const fetchUser = (username, success, error) => (
  $.ajax({
    method: 'GET',
    url: `api/users/${username}`,
    success,
    error,
  })
);

export const login = (user, success, error) => (
  $.ajax({
    method: 'POST',
    url: 'api/session',
    data: { user },
    success,
    error,
  })
);

export const logout = (success, error) => (
  $.ajax({
    method: 'DELETE',
    url: 'api/session',
    success,
    error,
  })
);

export const search = (query, success, error) => (
  $.ajax({
    method: 'GET',
    url: 'api/users/search',
    data: { query },
    success,
    error,
  })
);
