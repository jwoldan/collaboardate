import { connect } from 'react-redux';

import BoardTitleMenu from './board_title_menu';

import { toggleMenu } from '../../actions/menu_status_actions';

const mapStateToProps = ({ menuStatus }) => ({
  show: menuStatus.showBoardTitleMenu,
});

const mapDispatchToProps = (dispatch) => ({
  toggle: () => dispatch(toggleMenu('showBoardTitleMenu')),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardTitleMenu);
