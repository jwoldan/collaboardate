import { connect } from 'react-redux';

import HomeInformationMenu from './home_information_menu';

import { toggleMenu } from '../../actions/menu_status_actions';

const mapDispatchToProps = (dispatch) => ({
  toggle: () => dispatch(toggleMenu('showHomeInformationMenu')),
});

export default connect(
  null,
  mapDispatchToProps
)(HomeInformationMenu);
