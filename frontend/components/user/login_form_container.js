import { connect } from 'react-redux';

import { login } from '../../actions/current_user_actions';

import LoginForm from './login_form';

const mapStateToProps = ({ errors }) => ({
  errors: errors.login
});

const mapDispatchToProps = (dispatch) => ({
  login: (user) => dispatch(login(user)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
