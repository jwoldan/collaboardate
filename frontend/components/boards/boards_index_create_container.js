import { connect } from 'react-redux';

import BoardsIndexCreate from './boards_index_create';

import { toggleMenu } from '../../actions/menu_status_actions';

const mapStateToProps = ({ menuStatus }) => ({
  show: menuStatus.showBoardsIndexCreate,
});

const mapDispatchToProps = dispatch => ({
  toggle: () => dispatch(toggleMenu('showBoardsIndexCreate', true)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardsIndexCreate);
