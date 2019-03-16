import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import BoardMenu from './board_menu';

import { checkSharedUser } from '../../reducers/selectors';

const mapStateToProps = ({ menuStatus, shares, currentUser }, ownProps) => {
  return {
    shared: checkSharedUser(shares, currentUser),
  };
};

export default withRouter(connect(mapStateToProps)(BoardMenu));
