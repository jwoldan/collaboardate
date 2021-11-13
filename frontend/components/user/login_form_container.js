import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { login } from '../../actions/user_actions';

import LoginForm from './login_form';

const LoginFormContainer = () => {
  const history = useHistory();

  const { currentUser, errors } = useSelector(state => ({
    currentUser: state.currentUser,
    errors: state.errors.login,
  }));
  const dispatch = useDispatch();

  return (
    <LoginForm
      history={history}
      currentUser={currentUser}
      errors={errors}
      login={user => dispatch(login(user))}
      loginGuest={() =>
        dispatch(
          login({
            username: 'guest',
            password: 'collaboardate',
          })
        )
      }
    />
  );
};

export default LoginFormContainer;
