import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import BoardMembers from './board_members';

import { selectBoardUsers } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  const { params } = ownProps.match;

  return {
    users: selectBoardUsers(state, parseInt(params.boardId)),
  };
};

export default withRouter(connect(mapStateToProps)(BoardMembers));
