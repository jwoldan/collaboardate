import { connect } from 'react-redux';

import HomeCreateMenu from './home_create_menu';

import { toggleMenu } from '../../actions/menu_status_actions';

const mapDispatchToProps = dispatch => ({
  toggle: () => dispatch(toggleMenu('showHomeCreateMenu')),
});

export default connect(
  null,
  mapDispatchToProps
)(HomeCreateMenu);
