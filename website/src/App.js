/**
 * Copyright 2017-present, Chris Stowe.
 * All rights reserved.
 */
import React, { Component } from 'react';
import Menu from './Menu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to BattleQuote</h2>
          <Menu />
        </div>
      </div>
    );
  }
}

export default App;
