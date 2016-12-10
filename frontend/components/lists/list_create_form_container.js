import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import ListCreateForm from './list_create_form';

import { selectBoard } from '../../reducers/selectors.js';
import { createList } from '../../actions/list_actions';

const mapStateToProps = (state, ownProps) => {
  if(ownProps.params) {
    return ({
      board: selectBoard(state, ownProps.params.boardId),
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
