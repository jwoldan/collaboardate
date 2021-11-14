import { connect } from 'react-redux';

import ListDeleteMenu from './list_delete_menu';

import { deleteList } from '../../actions/list_actions';

const mapDispatchToProps = (dispatch) => ({
  deleteList: (id) => dispatch(deleteList(id)),
});

export default connect(null, mapDispatchToProps)(ListDeleteMenu);
