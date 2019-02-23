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
    const { show, disabled } = this.props;
    const { title } = this.state;

    let buttonClass = 'nav-button';
    if (disabled) buttonClass += ' disabled';

    const menuContent = (
      <form className="menu-form" onSubmit={this.submit}>
        <label>
          Title
          <input
            type="text"
            className="input"
            ref="titleInput"
            value={title}
            onChange={this.updateTitle}
            onFocus={e => e.target.select()}
          />
        </label>
        <input type="submit" className="button green" value="Rename" />
      </form>
    );

    // This setTimeout seems to be required because the menuContent
    // is produced using the renderMenu method.
    if (show) {
      setTimeout(() => this.refs.titleInput.focus(), 1);
    }

    return (
      <li className="title">
        <section className={buttonClass} onClick={this.toggle}>
          <h2>{this.props.title}</h2>
        </section>
        {this.renderMenu('Rename Board', menuContent)}
      </li>
    );
  }
}

export default BoardTitleMenu;
