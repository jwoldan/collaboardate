import { connect } from 'react-redux';

import BoardMenu from './board_menu';

import { toggleMenu } from '../../actions/menu_status_actions';

const mapStateToProps = ({ menuStatus }) => ({
  show: menuStatus.showBoardMenu,
});

const mapDispatchToProps = (dispatch) => ({
  toggle: () => dispatch(toggleMenu('showBoardMenu')),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardMenu);
