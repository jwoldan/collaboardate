import React from 'react';

import DynamicEditable from '../general/dynamic_editable';

const menuKeyBase = 'showCardTitleEditable';

class CardTitleEditable extends DynamicEditable {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
    };

    this.updateTitle = this.updateTitle.bind(this);
    this.submit = this.submit.bind(this);
  }

  componentDidMount() {
    const menuKey = menuKeyBase;
    this.setState({ menuKey });
    this.props.addMenu(menuKey);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.card.id !== newProps.card.id) {
      this.props.removeMenu(this.state.menuKey);
      this.setState({ menuKey: menuKeyBase });
      this.props.addMenu(this.state.menuKey);
    }
    if (newProps.card && newProps.card.title) {
      this.setState({ title: newProps.card.title.slice() });
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
      const { card, updateCard } = this.props;
      const updatedCard = Object.assign({}, card, { title });
      updateCard(updatedCard).then(() => this.toggle());
    }
  }

  render() {
    const { card, showStatus } = this.props;
    const { title, menuKey } = this.state;
    const show = this.props.showStatus(menuKey);

    if (show) {
      setTimeout(() => {
        if (this.refs.titleInput) this.refs.titleInput.focus();
      }, 1);

      return (
        <form className="card-title-editable" onSubmit={this.submit}>
          <input
            type="text"
            className="input card-title-input"
            ref="titleInput"
            value={title}
            onChange={this.updateTitle}
            onFocus={e => e.target.select()}
          />
        </form>
      );
    } else {
      return (
        <h4 className="card-title" onClick={this.toggle}>
          {card.title}
        </h4>
      );
    }
  }
}

export default CardTitleEditable;
