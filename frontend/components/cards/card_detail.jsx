import React from 'react';
import Modal from 'react-modal';

import CardTitleEditableContainer from './card_title_editable_container';
import CardDueDateDisplay from './card_due_date_display';
import CardDescriptionEditableContainer from './card_description_editable_container';
import CardCommentFormContainer from './card_comment_form_container';
import CardCommentEditableContainer from './card_comment_editable_container';
import CardDueDateMenu from './card_due_date_menu';

class CardDetail extends React.Component {
  deleteCard = () => {
    const { card, deleteCard } = this.props;
    deleteCard(card.id).then(deletedCard => this.props.history.push(`/b/${deletedCard.board_id}`));
  };

  resetCard = () => {
    this.props.history.push(`/b/${this.props.card.board_id}`);
    this.props.receiveCardDetail({});
  };

  resetMenus = () => {
    const { menuIsOpen, resetMenus } = this.props;
    if (menuIsOpen) resetMenus();
  };

  render() {
    const { card, comments, list, updateCard, resetMenus, disabled } = this.props;

    const show = typeof card.id !== 'undefined';
    const safeList = list ? list : {};
    let sidebarClass = 'card-detail-sidebar';
    if (disabled) sidebarClass += ' hide';

    return (
      <Modal
        isOpen={show}
        contentLabel="Modal"
        className="card-detail-modal"
        overlayClassName="modal-overlay"
        onRequestClose={this.resetCard}
      >
        <section className="card-detail clearfix" onClick={this.resetMenus}>
          <section className="card-detail-header">
            <span className="menu-close" onClick={this.resetCard} />
            <CardTitleEditableContainer card={card} updateCard={updateCard} disabled={disabled} />
            <p>in list {safeList.title}</p>
          </section>

          <section className="card-detail-body">
            <CardDueDateDisplay card={card} updateCard={updateCard} />

            <CardDescriptionEditableContainer
              card={card}
              updateCard={updateCard}
              disabled={disabled}
            />
            <h5>Add Comment</h5>
            <CardCommentFormContainer disabled={disabled} />
            {card.comment_count > 0 ? <h5>Comments</h5> : null}
            <ul>
              {comments.map(comment => (
                <CardCommentEditableContainer
                  key={comment.id}
                  comment={comment}
                  disabled={disabled}
                />
              ))}
            </ul>
          </section>

          <section className={sidebarClass}>
            <h5>Actions</h5>
            <ul className="card-detail-actions">
              <li onClick={this.deleteCard}>Delete</li>
              <CardDueDateMenu card={card} updateCard={updateCard} disabled={disabled} />
            </ul>
          </section>
        </section>
      </Modal>
    );
  }
}

export default CardDetail;
