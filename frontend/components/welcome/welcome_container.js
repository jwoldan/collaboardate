import { connect } from 'react-redux';

import { login } from '../../actions/user_actions';

import Welcome from './welcome';

const mapDispatchToProps = (dispatch) => ({
  loginGuest: () => dispatch(login({
    username: 'guest',
    password: 'collaboardate'
  })),
});

export default connect(
  null,
  mapDispatchToProps
)(Welcome);
