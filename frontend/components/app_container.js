import { connect } from 'react-redux';

import App from './app';

const mapStateToProps = ({ currentUser }) => ({
  currentUser,
});

export default connect(mapStateToProps)(App);
