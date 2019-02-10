import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import BoardShareSearchResult from './board_share_search_result';

import {
  selectBoard,
  checkSharedUser,
  selectShareId
} from '../../reducers/selectors';
import { createShare, deleteShare } from '../../actions/board_share_actions';

const mapStateToProps = (state, ownProps) => {
  const { params } = ownProps.match;
  const board = selectBoard(state, parseInt(params.boardId));
  const shares = state.shares;

  return {
    currentUser: state.currentUser,
    board,
    shares,
    alreadyShared: checkSharedUser(shares, ownProps.user),
    shareId: selectShareId(shares, ownProps.user),
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
