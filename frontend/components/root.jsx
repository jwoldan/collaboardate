import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import AppContainer from './app_container';
import SignupFormContainer from './user/signup_form_container';
import LoginFormContainer from './user/login_form_container';
import BoardsIndexContainer from './boards/boards_index_container';
import BoardContainer from './boards/board_container';
import ProfileContainer from './user/profile_container';

export default ({ store }) => {

  function _redirectIfLoggedIn(_, replace) {
    if(store.getState().currentUser !== null) {
      replace('/');
    }
  }

  function _ensureLoggedIn(_, replace) {
    if(store.getState().currentUser === null) {
      replace('/login');
    }
  }

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route
          path="/signup"
          component={ SignupFormContainer }
          onEnter={ _redirectIfLoggedIn } />
        <Route
          path="/login"
          component={ LoginFormContainer }
          onEnter={ _redirectIfLoggedIn } />
        <Route path="/" component={ AppContainer }>
          <IndexRoute component= { BoardsIndexContainer } />
          <Route path="/b/:boardId" component={ BoardContainer } />
          <Route path="/c/:cardId" component={ BoardContainer } />
          <Route
            path="/:username"
            component={ ProfileContainer }
            onEnter={ _ensureLoggedIn } />
        </Route>
      </Router>
    </Provider>
  );
};
