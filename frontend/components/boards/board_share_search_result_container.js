import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import BoardShareSearchResult from './board_share_search_result';

import { selectBoard, checkSharedUser } from '../../reducers/selectors';
import { createShare, deleteShare } from '../../actions/board_share_actions';

const mapStateToProps = (state, ownProps) => {
  const board = selectBoard(state, parseInt(ownProps.params.boardId));
  return {
    currentUser: state.currentUser,
    board,
    alreadyShared: checkSharedUser(board, ownProps.user),
  };
};

const mapDispatchToProps = (dispatch) => ({
  createShare: (share) => dispatch(createShare(share)),
  deleteShare: (id) => dispatch(deleteShare(id)),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(BoardShareSearchResult)
);
