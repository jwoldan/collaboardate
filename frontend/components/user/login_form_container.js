import { connect } from 'react-redux';

import { login } from '../../actions/current_user_actions';

import LoginForm from './login_form';

const mapStateToProps = ({ errors }) => ({
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
