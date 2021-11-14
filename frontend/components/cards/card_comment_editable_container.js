import { connect } from 'react-redux';

import CardCommentEditable from './card_comment_editable';

import { addMenu, removeMenu, toggleMenu } from '../../actions/menu_status_actions';
import { updateComment, deleteComment } from '../../actions/comment_actions';

const mapStateToProps = ({ currentUser, menuStatus }) => ({
  currentUser,
  showStatus: (menu) => menuStatus[menu],
});

const mapDispatchToProps = (dispatch) => ({
  addMenu: (menu) => dispatch(addMenu(menu)),
  removeMenu: (menu) => dispatch(removeMenu(menu)),
  toggle: (menu) => dispatch(toggleMenu(menu)),
  updateComment: (comment) => dispatch(updateComment(comment)),
  deleteComment: (id) => dispatch(deleteComment(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CardCommentEditable);
