import { connect } from 'react-redux';

import { signup, login } from '../../actions/user_actions';

import SignupForm from './signup_form';

const mapStateToProps = ({ currentUser, errors }) => ({
  currentUser,
  errors: errors.signup,
});

const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signup(user)),
  loginGuest: () =>
    dispatch(
      login({
        username: 'guest',
        password: 'collaboardate',
      })
    ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);
