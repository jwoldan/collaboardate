import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import BoardTitleMenuContent from './board_title_menu_content';

import { updateBoard } from '../../actions/board_actions';

const mapDispatchToProps = dispatch => ({
  updateBoard: board => dispatch(updateBoard(board)),
});

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(BoardTitleMenuContent)
);
