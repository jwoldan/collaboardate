import { connect } from 'react-redux';

import BoardDeleteMenu from './board_delete_menu';

import { toggleMenu } from '../../actions/menu_status_actions';
import { deleteBoard } from '../../actions/board_actions';

const mapStateToProps = ({ menuStatus }) => ({
  show: menuStatus.showBoardDeleteMenu,
});

const mapDispatchToProps = (dispatch) => ({
  toggle: () => dispatch(toggleMenu('showBoardDeleteMenu', true)),
  deleteBoard: (id) => dispatch(deleteBoard(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardDeleteMenu);
