import { connect } from 'react-redux';

import CardCommentForm from './card_comment_form';

import { createComment } from '../../actions/comment_actions';

const mapStateToProps = ({ cardDetail, currentUser }) => ({
  currentUser,
  cardDetail,
});

const mapDispatchToProps = (dispatch) => ({
  createComment: (comment) => dispatch(createComment(comment)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardCommentForm);
