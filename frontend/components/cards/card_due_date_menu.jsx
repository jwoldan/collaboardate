import React from 'react';
import moment from 'moment';

import ToggleMenu from '../general/toggle_menu';

class CardDueDateMenu extends ToggleMenu {
  state = {
    dueDate: '',
    dueTime: '',
  };

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

  clearDueDate = () => {
    this.props
      .updateCard({
        id: this.props.card.id,
        due_date: null,
        due_date_complete: false,
      })
      .then(() => this.toggle());
  };

  submit = e => {
    e.preventDefault();
    const { dueDate, dueTime } = this.state;
    const momentDateTime = moment(`${dueDate} ${dueTime}`, 'YYYY-MM-DD HH:mm', true);
    if (momentDateTime.isValid()) {
      this.props.updateCard({
        id: this.props.card.id,
        due_date: momentDateTime.format(),
        due_date_complete: false,
      });
      this.toggle();
    }
  };

  update = property => {
    return e => this.setState({ [property]: e.currentTarget.value });
  };

  render() {
    const { card, show, disabled } = this.props;
    const { dueDate, dueTime } = this.state;

    const menuContent = (
      <form className="menu-form" onSubmit={this.submit}>
        <label>
          Due Date
          <input
            type="date"
            className="input"
            ref="dueDateInput"
            placeholder="e.g., 01/24/2018"
            value={dueDate}
            onChange={this.update('dueDate')}
          />
          <input
            type="time"
            className="input"
            ref="dueTimeInput"
            placeholder="e.g., 12:45 PM"
            value={dueTime}
            onChange={this.update('dueTime')}
          />
        </label>
        <section className="menu-due-date-buttons">
          <input type="submit" className="button green" value="Save" />
          <input type="button" className="button red" onClick={this.clearDueDate} value="Remove" />
        </section>
      </form>
    );

    return (
      <section className="menu-due-date" onClick={this.toggle}>
        <li>Due Date</li>
        {this.renderMenu('Change Due Date', menuContent)}
      </section>
    );
  }
}

export default CardDueDateMenu;
