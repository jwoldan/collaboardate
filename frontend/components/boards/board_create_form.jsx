import React from 'react';
import { withRouter } from 'react-router';

import BoardVisibilityOptions from './board_visibility_options';

const defaultState = {
  board: {
    title: '',
    visibility: 'Private',
    background: 'blue',
  },
  showVisibility: false,
};

class BoardCreateForm extends React.Component {

  constructor() {
    super();

    this.state = Object.assign({}, defaultState);

    this.updateNewBoard = this.updateNewBoard.bind(this);
    this.toggleVisibility = this.toggleVisibility.bind(this);
    this.createBoard = this.createBoard.bind(this);
  }

  updateNewBoard(property) {

    return e => {
      Object.freeze(this.state);
      const value = (
        typeof e.currentTarget.value !== 'undefined' ?
        e.currentTarget.value :
        e.currentTarget.dataset.value
      );
      const board = Object.assign({}, this.state.board, {
        [property]: value
      });

      const showVisibility = (
        property === 'visibility' ?
        false :
        this.state.showVisibility
      );

      this.setState({
        board,
        showVisibility,
      });

    };

  }

  createBoard(e) {
    e.preventDefault();
    const newBoard = Object.assign({}, this.state.board);
    newBoard.title = newBoard.title.trim();
    if (newBoard.title !== '') {
      this.props.createBoard(newBoard).then((board) => {
        this.props.toggle();
        this.setState(Object.assign({}, defaultState));
        this.props.router.push(`/b/${board.id}`);
        this.props.resetMenus();
      });
    }
  }

  toggleVisibility() {
    this.setState({ showVisibility: true });
  }

  render() {
    const { board, showVisibility } = this.state;
    const { title, visibility } = board;

    // I'm unsure why setTimeout is required here
    if (this.props.show) {
      setTimeout(() => this.refs.titleInput.focus(), 1);
    }

    let visibilityTextClass = "menu-form-text quiet";
    let visibilityMenuClass = "";
    if (showVisibility) {
      visibilityTextClass += " hide";
    } else {
      visibilityMenuClass += " hide";
    }

    return (
      <form className="menu-form" onSubmit={ this.createBoard }>
        <label>
          Title
          <input
            type="text"
            className="input"
            ref="titleInput"
            placeholder="Like &quot;Wedding Planning&quot;"
            value={ title }
            onChange={ this.updateNewBoard('title') }
          />
        </label>

        <span
          className={ visibilityTextClass }
          onClick={ this.toggleVisibility }
        >
          This board will be { visibility }.&nbsp;
          <a>Change.</a>
        </span>

        <BoardVisibilityOptions
          visibilityClass={ visibilityMenuClass }
          updateVisibility={ this.updateNewBoard('visibility') }
        />

        <input type="submit" className="button green" value="Create"/>
      </form>
    );
  }
}

export default withRouter(BoardCreateForm);
