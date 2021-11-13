import { connect } from 'react-redux';

import BoardShareMenuContent from './board_share_menu_content';

import { search } from '../../util/user_api_util';

const mapStateToProps = () => ({
  search,
});

export default connect(
  mapStateToProps,
  null
)(BoardShareMenuContent);
