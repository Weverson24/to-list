import React, { Component } from 'react';

export default class Task extends Component {
  constructor(props) {
    super(props);

    const { data } = this.props;
    this.state = {
      id: data.id,
      hasFinished: false,
    };
  }

  handleCheckbox = (event) => {
    const { onUpdate } = this.props;
    const { currentState } = this.state;
    this.setState({
      hasFinished: event.target.checked,
    });
    onUpdate({
      ...currentState,
      hasFinished: event.target.checked,
    });
  };

  render() {
    // const { hasFinished } = this.state;
    const { data, onRemove, hasFinished } = this.props;
    const { id, title } = data;
    return (
      <div>
        <input
          type="checkbox"
          onChange={this.handleCheckbox}
          checked={hasFinished}
        />
        {title}
        <button type="button" onClick={() => onRemove(id)}>
          Remover
        </button>
      </div>
    );
  }
}
