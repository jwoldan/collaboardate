import { connect } from 'react-redux';

import BoardDeleteMenu from './board_delete_menu';

import { deleteBoard } from '../../actions/board_actions';

const mapDispatchToProps = dispatch => ({
  deleteBoard: id => dispatch(deleteBoard(id)),
});

export default connect(
  null,
  mapDispatchToProps
)(BoardDeleteMenu);
