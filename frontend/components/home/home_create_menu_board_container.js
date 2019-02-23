import { connect } from 'react-redux';

import HomeCreateMenuBoard from './home_create_menu_board';

import { toggleMenu } from '../../actions/menu_status_actions';

const mapStateToProps = ({ menuStatus }) => ({
  show: menuStatus.showHomeCreateMenuBoard,
});

const mapDispatchToProps = dispatch => ({
  toggle: () => dispatch(toggleMenu('showHomeCreateMenuBoard', true)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeCreateMenuBoard);
