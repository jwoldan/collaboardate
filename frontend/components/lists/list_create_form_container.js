import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import ListCreateForm from './list_create_form';

import { selectBoard } from '../../reducers/selectors.js';
import { createList } from '../../actions/list_actions';

const mapStateToProps = (state, ownProps) => {
  const { params } = ownProps.match;

  if(params.boardId) {
    return ({
      board: selectBoard(state, parseInt(params.boardId)),
    });
  } else {
    return { board: {} };
  }
};

const mapDispatchToProps = (dispatch) => ({
  createList: (list) => dispatch(createList(list)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ListCreateForm));
