import React from 'react';

const menuKeyBase = 'showCardDescriptionEditable';

class CardDescriptionEditable extends React.Component {
  state = {
    description: '',
    menuKey: null,
  };

  componentDidMount() {
    const menuKey = menuKeyBase;
    this.setState({ menuKey });
    this.props.addMenu(menuKey);
  }

  componentWillReceiveProps(newProps) {
    const { card } = newProps;
    if (this.props.card.id !== card.id) {
      this.props.removeMenu(this.state.menuKey);
      this.setState({ menuKey: menuKeyBase });
      this.props.addMenu(this.state.menuKey);
    }
    if (typeof card !== 'undefined' && card.description) {
      this.setState({ description: card.description });
    }
  }

  componentWillUnmount() {
    this.props.removeMenu(this.state.menuKey);
  }

  stopPropagation = e => {
    if (e) e.stopPropagation();
  };

  submit = e => {
    e.preventDefault();
    const description = this.state.description.trim();
    const { card, updateCard } = this.props;
    const updatedCard = Object.assign({}, card, { description });
    updateCard(updatedCard).then(() => this.toggle());
  };

  toggle = e => {
    this.stopPropagation(e);
    if (!this.props.disabled) {
      this.props.toggle(this.state.menuKey);
    }
  };

  updateDescription = e => {
    this.setState({ description: e.currentTarget.value });
  };

  render() {
    const { card, showStatus, disabled } = this.props;
    const { description, menuKey } = this.state;
    const show = this.props.showStatus(menuKey);
    const hideClass = disabled ? 'hide' : '';

    if (show) {
      setTimeout(() => {
        if (this.refs.descriptionTextarea) {
          this.refs.descriptionTextarea.focus();
        }
      }, 1);

      return (
        <form
          className="card-description-editable"
          onClick={this.stopPropagation}
          onSubmit={this.submit}
        >
          <textarea
            className="card-description-textarea"
            ref="descriptionTextarea"
            value={description}
            onChange={this.updateDescription}
            onFocus={e => e.target.select()}
          />
          <input type="submit" className="button green" value="Save" />
          <span className="menu-close" onClick={this.toggle} />
        </form>
      );
    } else {
      if (!card.description || card.description.trim() === '') {
        return (
          <section className="card-description">
            <span>
              <a className={hideClass} onClick={this.toggle}>
                Edit the description...
              </a>
            </span>
          </section>
        );
      } else {
        return (
          <section className="card-description">
            <span className="quiet">
              Description
              <a className={hideClass} onClick={this.toggle}>
                Edit
              </a>
            </span>
            <p>{card.description}</p>
          </section>
        );
      }
    }
  }
}

export default CardDescriptionEditable;
