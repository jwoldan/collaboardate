import React from 'react';
import Modal from 'react-modal';

import DynamicEditable from '../general/dynamic_editable';

const menuKeyBase = 'showCardQuickEdit';

class CardQuickEdit extends DynamicEditable {
  constructor() {
    super();

    this.state = {
      title: '',
    };

    this.toggleWithModal = this.toggleWithModal.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
    this.submit = this.submit.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
  }

  componentDidMount() {
    const menuKey = `${menuKeyBase}-${this.props.card.id}`;
    this.setState({ menuKey });
    this.props.addMenu(menuKey);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.card.id !== newProps.card.id) {
      this.props.removeMenu(this.state.menuKey);
      this.setState({ menuKey: `${menuKeyBase}-${newProps.card.id}` });
      this.props.addMenu(this.state.menuKey);
    }
    if (typeof newProps.card !== 'undefined') {
      this.setState({ title: newProps.card.title.slice() });
    }
  }

  componentWillUnmount() {
    this.props.removeMenu(this.state.menuKey);
  }

  toggleWithModal(e) {
    if (!this.props.disabled) {
      this.toggle(e);
      this.props.toggleModal();
    }
  }

  updateTitle(e) {
    this.setState({ title: e.currentTarget.value });
  }

  handleEnter(e) {
    if (e.which === 13) {
      e.preventDefault();
      this.submit();
    }
  }

  submit(e) {
    if (e) e.preventDefault();
    const title = this.state.title.trim();
    if (title !== '') {
      const { card, updateCard } = this.props;
      const updatedCard = Object.assign({}, card, { title });
      updateCard(updatedCard).then(() => this.toggle());
    }
  }

  deleteCard() {
    const { card, deleteCard } = this.props;
    deleteCard(card.id).then(() => this.props.toggleModal());
  }

  render() {
    const { card, showStatus, disabled } = this.props;
    const { title, menuKey } = this.state;
    const show = showStatus(menuKey);
    let menuContent = '';
    let iconClass = 'icon icon-edit';
    if (disabled) iconClass += ' hide';

    if (show) {
      setTimeout(() => {
        if (this.refs.titleTextarea) this.refs.titleTextarea.focus();
      }, 1);

      menuContent = (
        <section className="editable card-quick-edit-modal clearfix">
          <form onSubmit={this.submit}>
            <textarea
              className="input"
              ref="titleTextarea"
              value={title}
              onChange={this.updateTitle}
              onKeyDown={this.handleEnter}
              onFocus={e => e.target.select()}
            />
            <input type="submit" className="button green" value="Save" />
          </form>
          <ul className="card-quick-edit-actions">
            <li onClick={this.deleteCard}>Delete</li>
          </ul>
        </section>
      );
    }

    return (
      <section className="card-quick-edit" onClick={e => e.stopPropagation()}>
        <span className={iconClass} onClick={this.toggleWithModal} />
        {menuContent}
      </section>
    );
  }
}

export default CardQuickEdit;
