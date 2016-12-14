import { connect } from 'react-redux';

import BoardShareMenu from './board_share_menu';

import { toggleMenu } from '../../actions/menu_status_actions';
import { search } from '../../util/current_user_api_util';

const mapStateToProps = ({ menuStatus }) => ({
  search: search,
  show: menuStatus.showBoardShareMenu,
});

const mapDispatchToProps = (dispatch) => ({
  toggle: () => dispatch(toggleMenu('showBoardShareMenu', true)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardShareMenu);
