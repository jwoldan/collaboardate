import React from 'react';
import { withRouter } from 'react-router';
import Modal from 'react-modal';

import CardTitleEditableContainer from './card_title_editable_container';
import CardDescriptionEditableContainer
  from './card_description_editable_container';

class CardDetail extends React.Component {

  constructor() {
    super();

    this.resetCard = this.resetCard.bind(this);
    this.resetMenus = this.resetMenus.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
  }

  resetMenus() {
    const { menuIsOpen, resetMenus } = this.props;
    if (menuIsOpen) resetMenus();
  }

  resetCard() {
    this.props.router.push(`/b/${this.props.card.board_id}`);
    this.props.receiveCardDetail({});
  }

  deleteCard() {
    const { card, deleteCard } = this.props;
    deleteCard(card.id);
  }

  render() {
    const { card, list, updateCard, resetMenus } = this.props;

    const show = typeof card.id !== 'undefined';
    const safeList = list ? list : {};

    return (
      <Modal
        isOpen={ show }
        contentLabel="Modal"
        className="card-detail-modal"
        overlayClassName="modal-overlay"
        onRequestClose={ this.resetCard }>

        <section className="card-detail clearfix" onClick={ this.resetMenus }>

          <section className="card-detail-header">
            <span className="menu-close" onClick={ this.resetCard }/>
            <CardTitleEditableContainer
              card={ card }
              updateCard={ updateCard } />
            <p>in list { safeList.title }</p>
          </section>

          <section className="card-detail-body">
            <CardDescriptionEditableContainer
              card={ card }
              updateCard={ updateCard } />
          </section>

          <section className="card-detail-sidebar">
            <h5>Actions</h5>
            <ul className="card-detail-actions">
              <li onClick={ this.deleteCard }>Delete</li>
            </ul>
          </section>

        </section>
      </Modal>
    );
  }

}



export default withRouter(CardDetail);
