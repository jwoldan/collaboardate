export const signup = (user, success, error) =>
  $.ajax({
    method: 'POST',
    url: '/api/users',
    data: { user },
    success,
    error,
  });

export const fetchUser = (username, success, error) =>
  $.ajax({
    method: 'GET',
    url: `/api/users/${username}`,
    success,
    error,
  });

export const updateUser = (user, success, error) =>
  $.ajax({
    method: 'PATCH',
    url: `/api/users/${user.id}`,
    data: { user },
    success,
    error,
  });

export const updateUserAvatar = (id, formData, success, error) =>
  $.ajax({
    method: 'PATCH',
    url: `/api/users/${id}`,
    data: formData,
    contentType: false,
    processData: false,
    success,
    error,
  });

export const removeUserAvatar = (id, success, error) =>
  $.ajax({
    method: 'DELETE',
    url: `/api/users/${id}/avatar`,
    success,
    error,
  });

export const login = (user, success, error) =>
  $.ajax({
    method: 'POST',
    url: '/api/session',
    data: { user },
    success,
    error,
  });

export const logout = (success, error) =>
  $.ajax({
    method: 'DELETE',
    url: '/api/session',
    success,
    error,
  }).then(
    // When you load the page and are already logged in, we cache the logged in user
    // at window.loggedInUser in a script tag (outside of React).  Reloading the page
    // when we logout ensures the cached user is cleared.
    /* eslint-disable no-restricted-globals */
    () => location.reload(true)
  );

export const search = (query, success, error) =>
  $.ajax({
    method: 'GET',
    url: '/api/users/search',
    data: { query },
    success,
    error,
  });
