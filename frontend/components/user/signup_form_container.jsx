import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { signup, login } from '../../actions/user_actions';

import SignupForm from './signup_form';

const SignupFormContainer = () => {
  const navigate = useNavigate();

  const { currentUser, errors } = useSelector(state => ({
    currentUser: state.currentUser,
    errors: state.errors.signup,
  }));
  const dispatch = useDispatch();

  return (
    <SignupForm
      navigate={navigate}
      currentUser={currentUser}
      errors={errors}
      signup={user => dispatch(signup(user))}
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

export default SignupFormContainer;
