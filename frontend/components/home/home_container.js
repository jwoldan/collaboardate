import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Home from './home';

import { selectBoard } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  return {
    board: selectBoard(state, state.currentBoardId),
  };
};

export default withRouter(connect(mapStateToProps)(Home));
