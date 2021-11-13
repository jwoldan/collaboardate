import { connect } from 'react-redux';

import Home from './home';

import { selectBoard } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  return {
    board: selectBoard(state, state.currentBoardId),
  };
};

export default connect(mapStateToProps)(Home);
