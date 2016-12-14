import { connect } from 'react-redux';

import UserSearchResult from './user_search_result';

import { createShare } from '../../actions/board_share_actions';

const mapStateToProps = ({ currentUser }) => ({
  currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  createShare: (share) => dispatch(createShare(share)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserSearchResult);
