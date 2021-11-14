import React from 'react';

import UserIcon from '../user/user_icon';

class CardCommentForm extends React.Component {
  state = {
    body: '',
  };

  submit = (e) => {
    e.preventDefault();
    const body = this.state.body.trim();
    if (body !== '') {
      const { cardDetail, createComment } = this.props;
      const comment = {
        card_id: cardDetail.id,
        body,
      };
      createComment(comment).then(() => this.setState({ body: '' }));
    }
  };

  updateBody = (e) => {
    this.setState({ body: e.currentTarget.value });
  };

  render() {
    const { disabled, currentUser } = this.props;
    const { body } = this.state;

    let inputClass = 'button green';
    if (body.trim() === '') inputClass += ' disabled';

    if (disabled) {
      return null;
    } else {
      return (
        <section className="card-detail-container">
          <h6 className="inset">{currentUser.full_name}</h6>
          <section className="card-comment-display">
            <UserIcon user={currentUser} />
            <form className="card-comment-editable" onSubmit={this.submit}>
              <textarea className="card-comment-textarea" value={body} onChange={this.updateBody} />
              <input type="submit" className={inputClass} value="Save" />
            </form>
          </section>
        </section>
      );
    }
  }
}

export default CardCommentForm;
