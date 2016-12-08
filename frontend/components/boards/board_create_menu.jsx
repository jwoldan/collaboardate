import React from 'react';

import BoardCreateFormContainer from './board_create_form_container';

class BoardCreateMenu extends React.Component {
  constructor() {
    super();

    this.stopPropagation = this.stopPropagation.bind(this);
  }

  stopPropagation(e) {
    e.stopPropagation();
  }

  render () {
    const { show, toggle, createBoard } = this.props;
    let menuClass = "menu board-create-menu";
    if(show) {
      menuClass += " show";
    }

    return (
      <section className={ menuClass } onClick={ this.stopPropagation } >
        <span className="menu-close" onClick={ toggle }></span>
          <section className="menu-header">Create Board</section>
          <BoardCreateFormContainer toggle= { toggle } show={ show }/>
      </section>
    );
  }
}

export default BoardCreateMenu;
