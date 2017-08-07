import React, { Component } from 'react';

class MyPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: 'abc'
    };

    this.renderItems = this.renderItems.bind(this);
  }

  renderItems() {
    return (
      <span>{ this.state.text }</span>
    );
  }

  render() {
    return (
      <div>
        { this.renderItems() }
      </div>
    );
  }
}
    