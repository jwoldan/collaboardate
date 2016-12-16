import React from 'react';
import { withRouter } from 'react-router';

import ToggleMenu from '../general/toggle_menu';

class BoardBackgroundMenu extends ToggleMenu {

  constructor() {
    super();

    this.updateBackground = this.updateBackground.bind(this);
  }

  updateBackground(background) {
    return (e) => this.props.updateBoard({
      id: this.props.params.boardId,
      background,
    });
  }

  render() {

    const menuContent = (
      <section className="menu-section">
        <ul className="board-background-options">
          <li className="blue"
            onClick={ this.updateBackground('blue') }></li>
          <li className="orange"
            onClick={ this.updateBackground('orange') }></li>
          <li className="green"
            onClick={ this.updateBackground('green') }></li>
          <li className="red"
            onClick={ this.updateBackground('red') }></li>
          <li className="purple"
            onClick={ this.updateBackground('purple') }></li>
          <li className="pink"
            onClick={ this.updateBackground('pink') }></li>
          <li className="light-green"
            onClick={ this.updateBackground('light-green') }></li>
          <li className="light-blue"
            onClick={ this.updateBackground('light-blue') }></li>
          <li className="grey"
            onClick={ this.updateBackground('grey') }></li>
        </ul>
      </section>
    );

    return (
      <section className="board-menu-item">
        <a onClick={ this.toggle }>
          Change Background
        </a>
        { this.renderMenu("Change Background", menuContent) }
      </section>
    );
  }

}

export default withRouter(BoardBackgroundMenu);
