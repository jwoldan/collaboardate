import { connect } from 'react-redux';

import App from './app';

import { menuIsOpen } from '../reducers/selectors';
import { resetMenus } from '../actions/menu_status_actions';

const mapStateToProps = (state) => ({
  currentUser: state.currentUser,
  menuIsOpen: menuIsOpen(state),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  resetMenus: () => dispatch(resetMenus()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
