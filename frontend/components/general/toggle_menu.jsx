import React from 'react';

class ToggleMenu extends React.Component {

  constructor() {
    super();

    this.state = {
      show: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle(e) {
    this.setState({ show: !this.state.show });
  }
  
}

export default ToggleMenu;
