import { connect } from 'react-redux';

import { login } from '../../actions/user_actions';

import LoginForm from './login_form';

const mapStateToProps = ({ currentUser, errors }) => ({
  currentUser,
  errors: errors.login
});

const mapDispatchToProps = (dispatch) => ({
  login: (user) => dispatch(login(user)),
  loginGuest: () => dispatch(login({
    username: 'guest',
    password: 'collaboardate'
  })),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
