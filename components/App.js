import React, { Component } from 'react';

import Counter from './Counter';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: Math.floor(Math.random() * 100)
    };
  }

  handleRefresh(event: any) {
    event.preventDefault();

    this.setState({
      code: Math.floor(Math.random() * 100)
    });
  }

  render() {
    const {code} = this.state;

    return (
      <div>
        <h1 className="comment-list-header">A Weird Counter</h1>
        <Counter code={code} />
        <button onClick={::this.handleRefresh}>
          Refresh Counter
        </button>
      </div>
    );
  }
}
