import React from 'react';
import moment from 'moment';

import ToggleMenu from '../general/toggle_menu';

class CardDueDateMenu extends ToggleMenu {

  constructor(props) {
    super(props);

    this.state = {
      dueDate: '',
      dueTime: '',
    };

    this.update = this.update.bind(this);
    this.clearDueDate = this.clearDueDate.bind(this);
    this.submit = this.submit.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (typeof newProps.card !== 'undefined') {
      const momentDateTime = moment(newProps.card.due_date);
      if (momentDateTime.isValid()) {
        const dueDate = momentDateTime.format('YYYY-MM-DD');
        const dueTime = momentDateTime.format('HH:mm');
        this.setState({
          dueDate,
          dueTime,
        });
      } else {
        this.setState({
          dueDate: '',
          dueTime: '',
        });
      }
    }
  }

  update(property) {
    return (e) => this.setState({ [property]: e.currentTarget.value });
  }

  clearDueDate() {
    this.props.updateCard({
      id: this.props.card.id,
      due_date: null,
      due_date_complete: false
    }).then(
      () => this.toggle()
    );
  }

  submit(e) {
    e.preventDefault();
    const { dueDate, dueTime } = this.state;
    const momentDateTime = moment(
      `${dueDate} ${dueTime}`,
      'YYYY-MM-DD HH:mm',
      true
    );
    if (momentDateTime.isValid()) {
      this.props.updateCard({
        id: this.props.card.id,
        due_date: momentDateTime.format(),
        due_date_complete: false
      });
      this.toggle();
    }
  }

  render() {
    const { card, show, disabled } = this.props;
    const { dueDate, dueTime } = this.state;

    const menuContent = (
      <form className="menu-form" onSubmit={ this.submit }>
        <label>
          Due Date
          <input
            type="date"
            className="input"
            ref="dueDateInput"
            value={ dueDate }
            onChange={ this.update('dueDate') } />
          <input
            type="time"
            className="input"
            ref="dueTimeInput"
            value={ dueTime }
            onChange={ this.update('dueTime') } />
        </label>
        <section className="menu-due-date-buttons">
          <input type="submit" className="button green" value="Save"/>
          <input
            type="button"
            className="button red"
            onClick={ this.clearDueDate }
            value="Remove" />
        </section>

      </form>
    );

    return (
      <section className="menu-due-date" onClick={ this.toggle }>
        <li >
          Due Date
        </li>
      { this.renderMenu("Change Due Date", menuContent) }
      </section>
    );
  }

}

export default CardDueDateMenu;
