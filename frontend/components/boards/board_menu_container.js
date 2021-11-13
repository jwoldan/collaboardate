import { connect } from 'react-redux';
import BoardMenu from './board_menu';

import { checkSharedUser } from '../../reducers/selectors';

const mapStateToProps = ({ menuStatus, shares, currentUser }, ownProps) => {
  return {
    shared: checkSharedUser(shares, currentUser),
  };
};

export default connect(mapStateToProps)(BoardMenu);
