import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';

import { login } from '../../actions/user_actions';

import Welcome from './welcome';

const WelcomeContainer = (props) => {
  const navigate = useNavigate();
  const location = useLocation();

  const dispatch = useDispatch();

  return (
    <Welcome
      navigate={navigate}
      location={location}
      loginGuest={() =>
        dispatch(
          login({
            username: 'guest',
            password: 'collaboardate',
          })
        )
      }
      {...props}
    />
  );
};

export default WelcomeContainer;
