import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import Root from './components/root';

// TODO: Remove after testing!
import * as CurrentUserActions from './actions/current_user_actions';
import * as BoardActions from './actions/board_actions';
import * as ListAPIUtil from './util/list_api_util';

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
  window.BoardActions = BoardActions;
  window.ListAPIUtil = ListAPIUtil;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
