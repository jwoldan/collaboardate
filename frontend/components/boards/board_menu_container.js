import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import BoardMenu from './board_menu';

import { checkSharedUser } from '../../reducers/selectors';
import { toggleMenu } from '../../actions/menu_status_actions';

const mapStateToProps = ({ menuStatus, shares, currentUser }, ownProps) => {
  return {
    shared: checkSharedUser(shares, currentUser),
    show: menuStatus.showBoardMenu,
  };
};

const mapDispatchToProps = dispatch => ({
  toggle: () => dispatch(toggleMenu('showBoardMenu')),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(BoardMenu)
);
