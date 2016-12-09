import React from 'react';

import ToggleMenu from '../general/toggle_menu';

class BoardTitleMenu extends ToggleMenu {

  constructor(props) {
    super(props);

    this.state = {
      title: '',
    };

    this.updateTitle = this.updateTitle.bind(this);
    this.submit = this.submit.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.setState({ title: newProps.title.slice() });
  }

  updateTitle(e) {
    this.setState({ title: e.currentTarget.value });
  }

  submit(e) {
    e.preventDefault();
    const title = this.state.title.trim();
    if (title !== '') {
      this.props.updateBoard({ title });
      this.toggle();
    }
  }

  render() {
    const { updateTitle } = this.props;
    const { title, show } = this.state;

    let titleMenuClass = "menu";
    if (show) titleMenuClass += " show";

    return (
      <li className="title">
        <section className="nav-button" onClick={ this.toggle }>
          { this.props.title }
        </section>
        <section className={ titleMenuClass }>
          <span
            className="menu-close"
            onClick={ this.toggle }
          />
          <section className="menu-header">
            Rename Board
          </section>
          <form className="menu-form" onSubmit={ this.submit }>
            <label>
              Title
              <input
                type="text"
                className="input"
                ref="titleInput"
                value={ title }
                onChange={ this.updateTitle }
              />
            </label>
            <input type="submit" className="button green" value="Create"/>
          </form>
        </section>
      </li>
    );
  }
}

export default BoardTitleMenu;
