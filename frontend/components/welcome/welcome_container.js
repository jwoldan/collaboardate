import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { login } from '../../actions/user_actions';

import Welcome from './welcome';

const mapDispatchToProps = (dispatch) => ({
  loginGuest: () => dispatch(login({
    username: 'guest',
    password: 'collaboardate'
  })),
});

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(Welcome)
);
