import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import BoardMenu from './board_menu';

import { checkSharedUser } from '../../reducers/selectors';
import { toggleMenu } from '../../actions/menu_status_actions';

const mapStateToProps = ({ menuStatus, boards, currentUser }, ownProps) => {
  return ({
    shared: checkSharedUser(boards[ownProps.params.boardId], currentUser),
    show: menuStatus.showBoardMenu,
  });
};

const mapDispatchToProps = (dispatch) => ({
  toggle: () => dispatch(toggleMenu('showBoardMenu')),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(BoardMenu)
);
