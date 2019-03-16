import React from 'react';

const defaultState = {
  title: '',
};

class ListCreateForm extends React.Component {
  constructor(props) {
    super(props);

    this.input = React.createRef();
  }

  state = defaultState;

  componentDidMount() {
    this.input.current.focus();
  }

  createList = e => {
    e.preventDefault();
    const newList = Object.assign({}, this.state);
    newList.title = newList.title.trim();
    if (newList.title !== '') {
      newList.board_id = this.props.board.id;
      this.props.createList(newList).then(list => {
        this.setState(Object.assign({}, defaultState));
        this.input.current.focus();
      });
    }
  };

  updateTitle = e => {
    this.setState({ title: e.currentTarget.value });
  };

  render() {
    const { title } = this.state;

    return (
      <form className="list-create-form" onSubmit={this.createList}>
        <input
          type="text"
          className="input"
          ref={this.input}
          placeholder="Add a list..."
          value={title}
          onChange={this.updateTitle}
        />
        <input className="button green small" type="submit" value="Save" />
        <span className="menu-close" onClick={this.props.toggle} />
      </form>
    );
  }
}

export default ListCreateForm;
