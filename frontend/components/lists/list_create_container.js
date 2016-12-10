import { connect } from 'react-redux';

import ListCreate from './list_create';

import { toggleMenu } from '../../actions/menu_status_actions';

const mapStateToProps = ({ menuStatus }) => ({
  show: menuStatus.showListCreate,
});

const mapDispatchToProps = (dispatch) => ({
  toggle: () => dispatch(toggleMenu('showListCreate')),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListCreate);
