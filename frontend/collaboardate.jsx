import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import configureStore from './store/store';

import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  let preloadedState;

  if (window.preloadedUser) {
    preloadedState = {
      currentUser: window.preloadedUser,
    };
  }

  const store = configureStore(preloadedState);

  Modal.setAppElement(document.body);
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
