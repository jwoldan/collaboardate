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
    if (typeof newProps.title !== 'undefined') {
      this.setState({ title: newProps.title.slice() });
    }
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
    const { updateTitle, disabled } = this.props;
    const { title, show } = this.state;

    if (show) {
      // TODO figure out why this doesn't work
      this.refs.titleInput.focus();
    }

    let buttonClass = "nav-button";
    if (disabled) buttonClass += " disabled";

    const menuContent = (
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
    );

    return (
      <li className="title">
        <section className={ buttonClass } onClick={ this.toggle }>
          { this.props.title }
        </section>
        { this.renderMenu("Title", menuContent) }
      </li>
    );
  }
}

export default BoardTitleMenu;
