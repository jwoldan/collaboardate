import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import BoardMembers from './board_members';

import { selectBoardUsers } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
  users: selectBoardUsers(state, parseInt(ownProps.params.boardId)),
});

export default withRouter(
  connect(
    mapStateToProps
  )(BoardMembers)
);
