import React from 'react';
import { connect } from 'react-redux';

import { addMenu, removeMenu, toggleMenu } from '../../actions/menu_status_actions';
import { tryStopPropagation } from '../../util/event_util';

class WithMenuStatus extends React.Component {
  componentDidMount() {
    const { add, menuKey } = this.props;
    add(menuKey);
  }

  componentDidUpdate(prevProps) {
    const { add, menuKey, remove } = this.props;
    if (prevProps.menuKey !== menuKey) {
      remove(prevProps.menuKey);
      add(menuKey);
    }
  }

  componentWillUnmount() {
    const { menuKey, remove } = this.props;
    remove(menuKey);
  }

  toggle = (e) => {
    const { disabled, toggle } = this.props;
    tryStopPropagation(e);
    if (disabled) return;

    toggle();
  };

  render() {
    const { children, show } = this.props;

    return children({ show, toggle: this.toggle });
  }
}

const mapStateToProps = ({ menuStatus }, { menuKey }) => ({
  show: menuStatus[menuKey],
});

const mapDispatchToProps = (dispatch, { leaveOthers, menuKey }) => ({
  add: (menu) => dispatch(addMenu(menu)),
  remove: (menu) => dispatch(removeMenu(menu)),
  toggle: () => dispatch(toggleMenu(menuKey, leaveOthers)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WithMenuStatus);
