import React from 'react';

class Board extends React.Component {

  componentDidMount() {
    this.props.fetchBoard(this.props.params.boardId);
  }

  componentWillReceiveProps(newProps) {
    if(this.props.params.boardId !== newProps.params.boardId) {
      this.props.fetchBoard(newProps.params.boardId);
    }
  }

  render() {
    const { currentBoard } = this.props;

    return (
      <section>
        <h1>{ currentBoard.title }</h1>
      </section>
    );
  }
}

export default Board;
