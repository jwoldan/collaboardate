import React from 'react';

import DynamicEditable from '../general/dynamic_editable';

const menuKeyBase = 'showListTitleEditable';

class ListTitleEditable extends DynamicEditable {

  constructor(props) {
    super(props);

    this.state = {
      title: '',
    };

    this.updateTitle = this.updateTitle.bind(this);
    this.submit = this.submit.bind(this);
  }

  componentDidMount() {
    const menuKey = `${menuKeyBase}-${this.props.list.id}`;
    this.setState({ menuKey });
    this.props.addMenu(menuKey);
  }

  componentWillReceiveProps(newProps) {
    if(this.props.list.id !== newProps.list.id) {
      this.props.removeMenu(this.state.menuKey);
      this.setState({ menuKey: `${menuKeyBase}-${newProps.list.id}` });
      this.props.addMenu(this.state.menuKey);
    }
    if (typeof newProps.list !== 'undefined') {
      this.setState({ title: newProps.list.title.slice() });
    }
  }

  componentWillUnmount() {
    this.props.removeMenu(this.state.menuKey);
  }

  updateTitle(e) {
    this.setState({ title: e.currentTarget.value });
  }

  submit(e) {
    e.preventDefault();
    const title = this.state.title.trim();
    if (title !== '') {
      const { list, updateList } = this.props;
      const updatedList = Object.assign({}, list, { title });
      updateList(updatedList).then(
        () => this.props.toggle()
      );
    }
  }

  render() {
    const { list, showStatus } = this.props;
    const { title, menuKey } = this.state;
    const show = this.props.showStatus(menuKey);

    if(show) {
      setTimeout(() => this.refs.titleInput.focus(), 1);
    }

    if(show) {
      return (
        <form onSubmit={ this.submit }>
          <input
            type="text"
            className="input list-title-input"
            ref="titleInput"
            value={ title }
            onChange={ this.updateTitle }
            onFocus={ (e) => e.target.select() }
          />
        </form>
      );
    } else {
      return (
        <h3 className="list-title" onClick={ this.toggle }>
          { list.title }
        </h3>
      );
    }

  }
}

export default ListTitleEditable;
