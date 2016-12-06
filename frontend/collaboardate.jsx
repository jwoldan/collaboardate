import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

// TODO: Remove after testing!
import * as CurrentUserActions from './actions/current_user_actions';

document.addEventListener('DOMContentLoaded', () => {
  let preloadedState;

  if(window.currentUser) {
    preloadedState = {
      currentUser: window.currentUser
    };
  }

  const store = configureStore(preloadedState);

  // TODO: Remove after testing!
  window.store = store;
  window.CurrentUserActions = CurrentUserActions;

  const root = document.getElementById('root');
  ReactDOM.render(<h1>Welcome to Collaboardate</h1>, root);
});
