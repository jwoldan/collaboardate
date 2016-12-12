import React from 'react';

import DynamicEditable from '../general/dynamic_editable';

const menuKeyBase = 'showCardCreate';

class CardCreate extends DynamicEditable {

  constructor(props) {
    super(props);

    this.state = {
      title: '',
    };

    this.updateTitle = this.updateTitle.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
    this.submit = this.submit.bind(this);
  }

  componentDidMount() {
    const menuKey = `${menuKeyBase}-${this.props.list.id}`;
    this.setState({ menuKey });
    this.props.addMenu(menuKey);
  }

  componentWillReceiveProps(newProps) {
    if(this.props.list.id !== newProps.list.id) {
      this.props.removeMenu(this.state.menuKey);
      this.setState({ menuKey: `${menuKeyBase}-${newProps.list.id}` });
      this.props.addMenu(this.state.menuKey);
    }
  }

  componentWillUnmount() {
    this.props.removeMenu(this.state.menuKey);
  }

  updateTitle(e) {
    this.setState({ title: e.currentTarget.value });
  }

  handleEnter(e) {
    if(e.which === 13) {
      e.preventDefault();
      this.submit();
    }
  }

  submit(e) {
    if (e) e.preventDefault();
    const title = this.state.title.trim();
    if (title !== '') {
      const { createCard, list } = this.props;
      createCard({ title, list_id: list.id }).then(
        () => {
          this.setState({ title: '' });
        }
      );
    }
  }

  render () {
    const { list, showStatus } = this.props;
    const { title, menuKey } = this.state;
    const show = this.props.showStatus(menuKey);

    if (show) {
      // Need to check that the input hasn't already disappeared
      // due to another render where show is false
      setTimeout(() => {
        if (this.refs.titleTextarea) this.refs.titleTextarea.focus();
      }, 1);

      return (
        <form className="card-create-form editable" onSubmit={ this.submit }>
          <textarea
            className="input card-title-input"
            ref="titleTextarea"
            value={ title }
            onChange={ this.updateTitle }
            onKeyDown= { this.handleEnter }
          />
        <input className="button green small" type="submit" value="Add" />
          <span className="menu-close" onClick={ this.toggle } />
        </form>
      );
    } else {
      return (
        <section className="card-create" onClick={ this.toggle }>
          Add a card...
        </section>
      );
    }

  }

}

export default CardCreate;
