import React from 'react';

const defaultState = {
  title: '',
};

class ListCreateForm extends React.Component {
  state = defaultState;

  createList = e => {
    e.preventDefault();
    const newList = Object.assign({}, this.state);
    newList.title = newList.title.trim();
    if (newList.title !== '') {
      newList.board_id = this.props.board.id;
      this.props.createList(newList).then(list => {
        this.setState(Object.assign({}, defaultState));
      });
    }
  };

  updateTitle = e => {
    this.setState({ title: e.currentTarget.value });
  };

  render() {
    const { title } = this.state;

    if (this.props.show) this.refs.titleInput.focus();

    return (
      <form className="list-create-form" onSubmit={this.createList}>
        <input
          type="text"
          className="input"
          ref="titleInput"
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
