import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CardCommentEditable from './card_comment_editable';

import { addMenu, removeMenu, toggleMenu } from '../../actions/menu_status_actions';
import { updateComment, deleteComment } from '../../actions/comment_actions';

const CardCommentEditableContainer = (props) => {
  const { currentUser, showStatus } = useSelector((state) => ({
    currentUser: state.currentUser,
    showStatus: (menu) => state.menuStatus[menu],
  }));
  const dispatch = useDispatch();

  return (
    <CardCommentEditable
      currentUser={currentUser}
      showStatus={showStatus}
      addMenu={(menu) => dispatch(addMenu(menu))}
      removeMenu={(menu) => dispatch(removeMenu(menu))}
      toggle={(menu) => dispatch(toggleMenu(menu))}
      updateComment={(comment) => dispatch(updateComment(comment))}
      deleteComment={(id) => dispatch(deleteComment(id))}
      {...props}
    />
  );
};

export default CardCommentEditableContainer;
