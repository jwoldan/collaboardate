import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import Home from './home';

import { selectBoard } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  return ({
  board: selectBoard(
    state,
    parseInt(ownProps.params.boardId),
    parseInt(ownProps.params.cardId)
  ),
  });
};

export default withRouter(
  connect(
    mapStateToProps
  )(Home)
);
