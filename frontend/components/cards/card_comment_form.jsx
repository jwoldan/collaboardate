import React from 'react';

class CardCommentForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      body: '',
    };

    this.updateBody = this.updateBody.bind(this);
    this.submit = this.submit.bind(this);
  }

  updateBody(e) {
    this.setState({ body: e.currentTarget.value });
  }

  submit(e) {
    e.preventDefault();
    const body = this.state.body.trim();
    if (body !== '') {
      const { cardDetail, createComment } = this.props;
      const comment = {
        card_id: cardDetail.id,
        body,
      };
      createComment(comment).then(
        () => this.setState({ body: '' })
      );
    }
  }

  render() {
    const { disabled, currentUser } = this.props;
    const { body } = this.state;

    let inputClass = "button green";
    if (body.trim() === '') inputClass += " disabled";

    if (disabled) {
      return null;
    } else {

      let userIcon;
      if (currentUser.avatar_url) {
        userIcon = (
          <span className="user-icon">
            <img src={ currentUser.avatar_url } />
          </span>
        );
      } else {
        userIcon = <span className="user-icon">{ currentUser.initials }</span>;
      }

      return (
        <section className="card-detail-container">
          <h6 className="inset">{ currentUser.full_name }</h6>
          <section className="card-comment-display">
            { userIcon }
            <form
              className="card-comment-editable"
              onSubmit={ this.submit }>
              <textarea
                className="card-comment-textarea"
                value= { body }
                onChange={ this.updateBody } />
                <input
                  type="submit"
                  className={ inputClass }
                  value="Save" />
            </form>
          </section>
        </section>
      );
    }
  }

}

export default CardCommentForm;