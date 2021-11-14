import React from 'react';

class BoardTitleMenuContent extends React.Component {
  constructor(props) {
    super(props);

    const title = typeof props.title === 'undefined' ? '' : props.title.slice();
    this.state = {
      title,
    };

    this.input = React.createRef();
  }

  componentDidMount() {
    this.input.current.focus();
  }

  updateTitle = (e) => {
    this.setState({ title: e.currentTarget.value });
  };

  submit = (e) => {
    e.preventDefault();
    const {
      match: {
        params: { boardId },
      },
    } = this.props;
    const title = this.state.title.trim();
    if (title !== '') {
      this.props.updateBoard({ id: boardId, title });
      this.props.toggle();
    }
  };

  render() {
    return (
      <form className="menu-form" onSubmit={this.submit}>
        <label>
          Title
          <input
            type="text"
            className="input"
            ref={this.input}
            value={this.state.title}
            onChange={this.updateTitle}
            onFocus={(e) => e.target.select()}
          />
        </label>
        <input type="submit" className="button green" value="Rename" />
      </form>
    );
  }
}

export default BoardTitleMenuContent;
