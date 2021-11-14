import { connect } from 'react-redux';

import BoardTitleMenuContent from './board_title_menu_content';

import { updateBoard } from '../../actions/board_actions';

const mapDispatchToProps = (dispatch) => ({
  updateBoard: (board) => dispatch(updateBoard(board)),
});

export default connect(null, mapDispatchToProps)(BoardTitleMenuContent);
