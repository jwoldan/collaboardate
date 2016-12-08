import React from 'react';

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

    this.updateBoard = this.updateBoard.bind(this);
    this.toggleVisibility = this.toggleVisibility.bind(this);
    this.createBoard = this.createBoard.bind(this);
  }

  updateBoard(property) {

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

  createBoard() {
    const newBoard = Object.assign({}, this.state.board);
    newBoard.title = newBoard.title.trim();
    if(newBoard.title !== '') {
      this.props.createBoard(newBoard).then(() => {
        this.props.toggle();
        this.setState(Object.assign({}, defaultState));
      });
    }
  }

  toggleVisibility() {
    this.setState({ showVisibility: true });
  }

  render() {
    const { board, showVisibility } = this.state;
    const { title, visibility } = board;

    if(this.props.show) this.refs.titleInput.focus();

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
            onChange={ this.updateBoard('title') }
          />
        </label>
        <span
          className={ visibilityTextClass }
          onClick={ this.toggleVisibility }
        >
          This board will be { visibility }.&nbsp;
          <a>Change.</a>
        </span>
        <ul className={ visibilityMenuClass }>
          <li>
            <a data-value="Private" onClick={ this.updateBoard('visibility') }>
              <h4>Private</h4>
              <span className="quiet small">
                The board is private.
                Only people added to the board can view and edit it.
              </span>
            </a>
          </li>
          <li>
            <a data-value="Public" onClick={ this.updateBoard('visibility') }>
              <h4>Public</h4>
              <span className="quiet small">
                The board is public. It&#8217;s visible to anyone with the
                link and will show up in search engines like Google.
                Only people added to the board can edit it.
              </span>
            </a>
          </li>
        </ul>
        <input type="submit" className="button green" value="Create"/>
      </form>
    );
  }
}

export default BoardCreateForm;
