import { connect } from 'react-redux';

import { signup } from '../../actions/current_user_actions';

import SignupForm from './signup_form';

const mapStateToProps = ({ errors }) => ({
  errors: errors.signup
});

const mapDispatchToProps = (dispatch) => ({
  signup: (user) => dispatch(signup(user)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);
