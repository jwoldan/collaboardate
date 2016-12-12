import React from 'react';
import Modal from 'react-modal';



class CardDetail extends React.Component {

  constructor() {
    super();

    this.resetCard = this.resetCard.bind(this);
  }

  resetCard() {
    this.props.receiveCardDetail({});
  }

  render() {
    const { card, list } = this.props;

    const show = typeof card.id !== 'undefined';

    return (
      <Modal
        isOpen={ show }
        contentLabel="Modal"
        className="card-detail-modal"
        overlayClassName="modal-overlay"
        onRequestClose={ this.resetCard }>
        <section className="card-detail clearfix">
          <section className="card-detail-body">
            <span className="menu-close" onClick={ this.resetCard }/>
            <h4>{ card.title }</h4>
            <p>in list { list.title }</p>
          </section>

          <section className="card-detail-sidebar">
          </section>
        </section>
      </Modal>
    );
  }

}

export default CardDetail;
