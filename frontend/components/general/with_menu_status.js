import React from 'react';
import { connect } from 'react-redux';

import { addMenu, removeMenu, toggleMenu } from '../../actions/menu_status_actions';
import { tryStopPropagation } from '../../util/event_util';

class WithMenuStatus extends React.Component {
  componentDidMount() {
    this.props.addMenu(this.props.menuKey);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.menuKey !== this.props.menuKey) {
      this.props.removeMenu(prevProps.menuKey);
      this.props.addMenu(this.props.menuKey);
    }
  }

  componentWillUnmount() {
    this.props.removeMenu(this.props.menuKey);
  }

  toggle = e => {
    tryStopPropagation(e);
    if (this.props.disabled) return;

    this.props.toggle();
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
  addMenu: menu => dispatch(addMenu(menu)),
  removeMenu: menu => dispatch(removeMenu(menu)),
  toggle: () => dispatch(toggleMenu(menuKey, leaveOthers)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithMenuStatus);
