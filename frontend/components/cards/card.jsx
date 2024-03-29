import React from 'react';
import { DragSource } from 'react-dnd';
import ItemTypes from '../dnd/item_types';

import CardQuickEditContainer from './card_quick_edit_container';
import CardDueDateBadge from './card_due_date_badge';

const cardSource = {
  beginDrag: (props) => ({
    card: props.card,
  }),
  canDrag: ({ disabled }) => !disabled,
  isDragging: (props, monitor) => props.card.id === monitor.getItem().card.id,
};

const collect = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
});

class Card extends React.Component {
  state = {
    active: false,
    menuKey: null,
  };

  activate = (active) => {
    return (e) => this.setState({ active });
  };

  viewCardDetail = () => {
    this.props.navigate(`/c/${this.props.card.id}`);
  };

  render() {
    const { card, disabled, connectDragSource, isDragging } = this.props;
    const { active } = this.state;
    let cardClass = isDragging ? 'card dragging' : 'card';
    if (active) cardClass += ' active';

    let descIcon;
    if (card.description) {
      descIcon = <span className="icon icon-desc" />;
    } else {
      descIcon = null;
    }

    let commentIcon;
    let commentCount;
    if (card.comment_count > 0) {
      commentIcon = <span className="icon icon-comment" />;
      commentCount = <span className="comment-count">{card.comment_count}</span>;
    } else {
      commentIcon = null;
      commentCount = null;
    }

    return connectDragSource(
      <section
        className={cardClass}
        onMouseEnter={this.activate(true)}
        onMouseLeave={this.activate(false)}
        onClick={this.viewCardDetail}
      >
        <CardQuickEditContainer card={card} disabled={disabled} />
        <h4 className="card-title">
          <section className="card-summary">{card.title}</section>
        </h4>
        <section className="card-icons">
          <CardDueDateBadge card={card} />
          {descIcon} {commentIcon} {commentCount}
        </section>
      </section>
    );
  }
}

export default DragSource(ItemTypes.CARD, cardSource, collect)(Card);
