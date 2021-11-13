import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';

import { login } from '../../actions/user_actions';

import Welcome from './welcome';

const WelcomeContainer = () => {
  const history = useHistory();
  const location = useLocation();

  const dispatch = useDispatch();

  return (
    <Welcome
      history={history}
      location={location}
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

export default WelcomeContainer;
