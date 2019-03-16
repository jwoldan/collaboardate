import React from 'react';
import moment from 'moment';

class CardDueDateForm extends React.Component {
  constructor(props) {
    super(props);

    if (typeof props.card !== 'undefined') {
      const momentDateTime = moment(props.card.due_date);
      if (momentDateTime.isValid()) {
        const dueDate = momentDateTime.format('YYYY-MM-DD');
        const dueTime = momentDateTime.format('HH:mm');
        this.state = {
          dueDate,
          dueTime,
        };
      } else {
        this.state = {
          dueDate: '',
          dueTime: '',
        };
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
      .then(() => this.props.toggle());
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
      this.props.toggle();
    }
  };

  update = property => {
    return e => this.setState({ [property]: e.currentTarget.value });
  };

  render() {
    const { dueDate, dueTime } = this.state;

    return (
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
  }
}

export default CardDueDateForm;
