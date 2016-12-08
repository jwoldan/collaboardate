import { connect } from 'react-redux';

import Board from './board';

const mapStateToProps = ({ boards }, ownProps) => {
  // debugger
  return ({
    currentBoard: boards[ownProps.routeParams.boardId]
  });
};

export default connect(
  mapStateToProps
)(Board);
