import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CardCommentForm from './card_comment_form';

import { createComment } from '../../actions/comment_actions';

const CardCommentFormContainer = (props) => {
  const {
    currentUser,
    cardDetail,
  } = useSelector((state) => ({
    currentUser: state.currentUser,
    cardDetail: state.cardDetail,
  }));
  const dispatch = useDispatch();

  return (
    <CardCommentForm
      currentUser={currentUser}
      cardDetail={cardDetail}
      createComment={(comment) => dispatch(createComment(comment))}
      {...props}
    />
  );
};

export default CardCommentFormContainer;
