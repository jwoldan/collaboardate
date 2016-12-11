import React from 'react';

class DynamicEditable extends React.Component {

  constructor() {
    super();

    this.state = {
      menuKey: null,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle(e) {
    if (!this.props.disabled) {
      this.props.toggle(this.state.menuKey);
    }
  }

}

export default DynamicEditable;
