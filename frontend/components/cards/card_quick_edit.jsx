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
    if(this.props.card.id !== newProps.card.id) {
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
      const { card, updateCard } = this.props;
      const updatedCard = Object.assign({}, card, { title });
      updateCard(updatedCard).then(
        () => this.props.toggle()
      );
    }
  }

  deleteCard() {
    const { card, deleteCard } = this.props;
    deleteCard(card.id);
  }

  render() {
    const { card, showStatus } = this.props;
    const { title, menuKey } = this.state;
    const show = this.props.showStatus(menuKey);
    let menuContent = "";

    if (show) {
      setTimeout(() => {
        if (this.refs.titleTextarea) this.refs.titleTextarea.focus();
      }, 1);

      menuContent = (
        <section className="editable card-quick-edit-modal clearfix">
          <form onSubmit={ this.submit }>
            <textarea
              className="input"
              ref="titleTextarea"
              value={ title }
              onChange={ this.updateTitle }
              onKeyDown= { this.handleEnter }
              onFocus={ (e) => e.target.select() } />
            <input type="submit" className="button green" value="Save" />
          </form>
          <ul className="card-quick-edit-actions">
            <li onClick={ this.deleteCard }>Delete</li>
          </ul>
        </section>
      );
    }



    return (
      <section>
        <span className="icon icon-edit" onClick={ this.toggle }/>
        <Modal
          isOpen={ show }
          contentLabel="Modal"
          className="card-quick-edit-modal"
          overlayClassName="modal-overlay"
          onRequestClose={ this.toggle } />
        { menuContent }
      </section>
    );
  }


}



export default CardQuickEdit;
