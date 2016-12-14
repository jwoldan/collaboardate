import React from 'react';

import DynamicEditable from '../general/dynamic_editable';

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
    const { comment, showStatus, disabled, deleteComment } = this.props;
    const { body, menuKey } = this.state;
    const show = this.props.showStatus(menuKey);
    const hideClass = disabled ? "hide" : "";

    let commentContent;

    if (show) {
      setTimeout(() => {
        if (this.refs.bodyTextarea) {
          this.refs.bodyTextarea.focus();
        }
      }, 1);

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
              className="button green"
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
          <section className="card-comment-controls">
            <a onClick={ this.toggle }>Edit</a>
            &nbsp;-&nbsp;
            <a onClick={ this.deleteComment }>Delete</a>
          </section>
        </section>
      );

    }

    return (
      <section className="card-comment-container">
        <h6>{ comment.author.full_name }</h6>
        { commentContent }
      </section>
    );
  }

}

export default CardCommentEditable;
