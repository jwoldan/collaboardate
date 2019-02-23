import React from 'react';

class DynamicEditable extends React.Component {
  constructor() {
    super();

    this.state = {
      menuKey: null,
    };

    this.toggle = this.toggle.bind(this);
    this.stopPropagation = this.stopPropagation.bind(this);
  }

  toggle(e) {
    this.stopPropagation(e);
    if (!this.props.disabled) {
      this.props.toggle(this.state.menuKey);
    }
  }

  stopPropagation(e) {
    if (e) e.stopPropagation();
  }
}

export default DynamicEditable;
