import React, { Component } from 'react';

import generators from '../lib/generators';

export default class AddTask extends Component {
  constructor() {
    super();

    this.initialState = {
      id: 0,
      title: '',
      hasFinished: false,
    };

    this.state = this.initialState;
  }

  handleInput = (event) => {
    const { randomId } = generators;
    this.setState({
      id: randomId(9999999999),
      title: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { onCreate } = this.props;
    const { id } = this.state;

    if (id > 0) {
      onCreate(this.state);
      this.setState(this.initialState);
    }
  };

  render() {
    const { title } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={title} onChange={this.handleInput} />
        <button type="submit">Adiconar tarefa</button>
      </form>
    );
  }
}
