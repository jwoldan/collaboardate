import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Route, Switch } from 'react-router-dom';

import AppContainer from './app_container';
import SignupFormContainer from './user/signup_form_container';
import LoginFormContainer from './user/login_form_container';

export default ({ store }) => (
  <Provider store={ store }>
    <HashRouter>
      <Switch>
        <Route exact path="/signup" component={ SignupFormContainer } />
        <Route exaxt path="/login" component={ LoginFormContainer } />
        <Route path="/" component={ AppContainer } />
      </Switch>
    </HashRouter>
  </Provider>
);
