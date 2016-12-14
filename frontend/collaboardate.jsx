import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import configureStore from './store/store';

import Root from './components/root';

// TODO: Remove after testing!
import * as CommentAPIUtil from './util/comment_api_util';

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
  window.CommentAPIUtil = CommentAPIUtil;

  Modal.setAppElement(document.body);
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
