import React from 'react';

import DynamicEditable from '../general/dynamic_editable';
import UserIcon from '../user/user_icon';

const menuKeyBase = 'showCommentEditable';

class CardCommentEditable extends DynamicEditable {

  constructor(props) {
    super(props);

    this.state = {
      body: '',
    };

    this.updateBody = this.updateBody.bind(this);
    this.submit = this.submit.bind(this);
    this.deleteComment = this.deleteComment.bind(this);
  }

  componentDidMount() {
    const menuKey = `${menuKeyBase}-${this.props.comment.id}`;
    this.setState({ menuKey });
    this.props.addMenu(menuKey);
  }

  componentWillReceiveProps(newProps) {
    if(this.props.comment.id !== newProps.comment.id) {
      this.props.removeMenu(this.state.menuKey);
      this.setState({ menuKey: `${menuKeyBase}-${newProps.comment.id}` });
      this.props.addMenu(this.state.menuKey);
    }
    if (typeof newProps.comment !== 'undefined') {
      this.setState({ body: newProps.comment.body.slice() });
    }
  }

  componentWillUnmount() {
    this.props.removeMenu(this.state.menuKey);
  }

  updateBody(e) {
    this.setState({ body: e.currentTarget.value });
  }

  submit(e) {
    e.preventDefault();
    const body = this.state.body.trim();
    if (body !== '') {
      const { comment, updateComment } = this.props;
      const updatedComment = Object.assign({}, comment, { body });
      updateComment(updatedComment).then(
        () => this.toggle()
      );
    }
  }

  deleteComment() {
    this.props.deleteComment(this.props.comment.id);
  }

  render() {
    const {
      comment,
      showStatus,
      disabled,
      deleteComment,
      currentUser,
    } = this.props;
    const { body, menuKey } = this.state;
    const show = showStatus(menuKey);
    const hideClass = disabled ||
      (comment.author.id !== currentUser.id ) ? "hide" : "";

    let commentControlsClass;
    if (disabled || (comment.author.id !== currentUser.id )) {
      commentControlsClass = "card-comment-controls hide";
    } else {
      commentControlsClass = "card-comment-controls";
    }

    let commentContent;

    if (show) {
      setTimeout(() => {
        if (this.refs.bodyTextarea) {
          this.refs.bodyTextarea.focus();
        }
      }, 1);

      let inputClass = "button green";
      if (body.trim() === '') inputClass += " disabled";

      commentContent = (
        <form
          className="card-comment-editable"
          onClick={ (e) => e.stopPropagation() }
          onSubmit={ this.submit }>
          <textarea
            className="card-comment-textarea"
            ref="bodyTextarea"
            value= { body }
            onChange={ this.updateBody }
            onFocus={ e => e.target.select() } />
            <input
              type="submit"
              className={ inputClass }
              value="Save" />
            <span className="menu-close" onClick={ this.toggle } />
        </form>
      );

    } else {

      commentContent = (
        <section className="card-comment-view">
          <section className="card-comment">
            { comment.body }
          </section>
          <section className={ commentControlsClass }>
            <a onClick={ this.toggle }>Edit</a>
            &nbsp;-&nbsp;
            <a onClick={ this.deleteComment }>Delete</a>
          </section>
        </section>
      );

    }

    return (
      <section className="card-detail-container">
        <h6 className="inset">{ comment.author.full_name }</h6>
        <section className="card-comment-display">
          <UserIcon user={ comment.author } />
          { commentContent }
        </section>

      </section>
    );
  }

}

export default CardCommentEditable;
