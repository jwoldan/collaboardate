import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Route, Switch } from 'react-router-dom';

import AppContainer from './app_container';
import SignupFormContainer from './user/signup_form_container';
import LoginFormContainer from './user/login_form_container';

export default ({ store }) => (
  <Provider store={store}>
    <Suspense fallback={null}>
      <HashRouter>
        <Switch>
          <Route exact path="/signup">
            <SignupFormContainer />
          </Route>
          <Route exaxt path="/login">
            <LoginFormContainer />
          </Route>
          <Route path="/">
            <AppContainer />
          </Route>
        </Switch>
      </HashRouter>
    </Suspense>
  </Provider>
);
