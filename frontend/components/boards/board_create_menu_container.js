import { connect } from 'react-redux';

import BoardCreateMenu from './board_create_menu';

import { toggleMenu } from '../../actions/menu_status_actions';

const mapStateToProps = ({ menuStatus }) => ({
  show: menuStatus.showBoardCreateMenu,
});

const mapDispatchToProps = (dispatch) => ({
  toggle: () => dispatch(toggleMenu('showBoardCreateMenu', true)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardCreateMenu);
