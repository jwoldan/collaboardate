import React from 'react';

import DynamicEditable from '../general/dynamic_editable';

const menuKeyBase = 'showCardDescriptionEditable';

class CardDescriptionEditable extends DynamicEditable {

  constructor(props) {
    super(props);

    this.state = {
      description: '',
    };

    this.updateDescription = this.updateDescription.bind(this);
    this.submit = this.submit.bind(this);
  }

  componentDidMount() {
    const menuKey = menuKeyBase;
    this.setState({ menuKey });
    this.props.addMenu(menuKey);
  }

  componentWillReceiveProps(newProps) {
    if(this.props.card.id !== newProps.card.id) {
      this.props.removeMenu(this.state.menuKey);
      this.setState({ menuKey: menuKeyBase });
      this.props.addMenu(this.state.menuKey);
    }
    if (typeof newProps.card !== 'undefined') {
      this.setState({ description: newProps.card.description.slice() });
    }
  }

  componentWillUnmount() {
    this.props.removeMenu(this.state.menuKey);
  }

  updateDescription(e) {
    this.setState({ description: e.currentTarget.value });
  }

  submit(e) {
    e.preventDefault();
    const description = this.state.description.trim();
    const { card, updateCard } = this.props;
    const updatedCard = Object.assign({}, card, { description });
    updateCard(updatedCard).then(
      () => this.toggle()
    );
  }

  render() {
    const { card, showStatus } = this.props;
    const { description, menuKey } = this.state;
    const show = this.props.showStatus(menuKey);

    if(show) {
      setTimeout(() => {
        if (this.refs.descriptionTextarea) {
          this.refs.descriptionTextarea.focus();
        }
      }, 1);

      return (
        <form
          className="card-description-editable"
          onClick={ (e) => e.stopPropagation() }
          onSubmit={ this.submit }>
          <textarea
            type="text"
            className="card-description-textarea"
            ref="descriptionTextarea"
            value={ description }
            onChange={ this.updateDescription }
            onFocus={ (e) => e.target.select() } />
          <input
            type="submit"
            className="button green"
            value="Save" />
          <span className="menu-close" onClick={ this.toggle } />
        </form>
      );

    } else {

      if (card.description === null || card.description.trim() === '') {
        return (
          <section className="card-description">
            <span><a onClick={ this.toggle }>Edit the description...</a></span>
          </section>
        );
      } else {
        return (
          <section className="card-description">
            <span className="quiet">Description <a onClick={ this.toggle }>Edit</a></span>
            <p>
              { card.description }
            </p>
          </section>
        );
      }



    }

  }
}

export default CardDescriptionEditable;
