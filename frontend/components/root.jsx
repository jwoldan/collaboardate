import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Route, Routes } from 'react-router-dom';

import AppContainer from './app_container';
import SignupFormContainer from './user/signup_form_container';
import LoginFormContainer from './user/login_form_container';

export default ({ store }) => (
  <Provider store={store}>
    <Suspense fallback={null}>
      <HashRouter>
        <Routes>
          <Route path="/signup" element={<SignupFormContainer />} />
          <Route path="/login" element={<LoginFormContainer />} />
          <Route path="/*" element={<AppContainer />} />
        </Routes>
      </HashRouter>
    </Suspense>
  </Provider>
);
